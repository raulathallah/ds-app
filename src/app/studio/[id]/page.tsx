"use client";
import { blackColor, goldColor } from "@/app/_lib/color";
import currencyFormat from "@/app/_lib/format";
import ChipCustom from "@/components/Chip";
import TextCustom from "@/components/Text";
import { getReviews } from "@/redux/slices/review-services";
import { getStudioDetail } from "@/redux/slices/studio-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faBookmark,
  faBox,
  faLightbulb,
  faLocationDot,
  faSnowflake,
  faStar,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Chip, Divider, Link } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FacilitiesComponent from "@/components/Facilities";

const StudioDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { detail } = useSelector((state: RootState) => state.studios);
  const { data: reviewList } = useSelector((state: RootState) => state.review);
  const params = useParams();

  useEffect(() => {
    dispatch(getStudioDetail(params.id.toString()));
    dispatch(getReviews(parseInt(params.id.toString())));
  }, []);
  if (!detail) {
    return false;
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <TextCustom text={detail.name} type="label-lg" />
          <Chip
            className="p-4"
            variant="flat"
            as={Button}
            startContent={
              <FontAwesomeIcon icon={faBookmark} color={blackColor} size="sm" />
            }
          >
            Add to favorite
          </Chip>
        </div>
        <Chip
          startContent={<FontAwesomeIcon icon={faLocationDot} size="lg" />}
          variant="light"
          color="default"
          className="gap-2"
        >
          <TextCustom text={detail.address} type="label-sm" />
        </Chip>
        <Chip
          startContent={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
          variant="light"
          color="default"
          className="gap-2"
        >
          <TextCustom text={"0" + detail.phone} type="label-sm" />
        </Chip>
        <Chip
          startContent={<FontAwesomeIcon icon={faInstagram} size="lg" />}
          variant="light"
          color="default"
          className="gap-2 items-center"
        >
          <Link
            style={{ color: blackColor }}
            href={`https://www.instagram.com/${detail.instagram}`}
            target="_blank"
          >
            <TextCustom text={detail.instagram} type="label-sm" />
          </Link>
        </Chip>
        <TextCustom
          text={currencyFormat(detail.rent) + "/hour"}
          type="label-md"
          color="green"
        />
        <Divider />
        <div className="grid grid-cols-4 gap-2">
          {detail.isAC && (
            <FacilitiesComponent icon={faSnowflake} text="Air Conditioner" />
          )}
          {detail.isSpeaker && (
            <FacilitiesComponent icon={faVolumeHigh} text="Speaker" />
          )}
          {detail.isRGB && (
            <FacilitiesComponent icon={faLightbulb} text="RGB Light" />
          )}
          {detail.isProperties && (
            <FacilitiesComponent icon={faBox} text="Properties" />
          )}
        </div>

        <Divider />

        <div className="flex gap-2">
          <TextCustom text={"Payment method:"} type="label-sm" />
          <ChipCustom size="sm" text="Transfer" color="warning"></ChipCustom>
        </div>

        <Link
          href={"//api.whatsapp.com/send?phone=62" + detail.phone}
          target="_blank"
        >
          <Button color="primary" className="w-full">
            Rent Now
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-8">
        <TextCustom text={"Top Reviews"} type="label-sm" />
        {reviewList.length > 0 ? (
          reviewList.map((rl) => (
            <div key={rl.id} className="grid gap-4">
              <div className="flex gap-4 items-center">
                <Avatar
                  isBordered
                  color="primary"
                  name={rl.username}
                  size="sm"
                />
                <div>
                  <div className="flex gap-4 items-center">
                    <TextCustom text={rl.username} type="label-sm" />

                    <div className="grid grid-cols-2 gap-0 items-center">
                      <FontAwesomeIcon
                        icon={faStar}
                        size="sm"
                        style={{ color: goldColor }}
                      />
                      <TextCustom text={rl.rating} type="label-sm" />
                    </div>
                  </div>
                </div>
              </div>
              <TextCustom text={rl.reviews} type="label-xs" />
            </div>
          ))
        ) : (
          <div className="text-center">
            <ChipCustom
              text="No Reviews"
              variant="flat"
              color="warning"
              size="lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudioDetail;
