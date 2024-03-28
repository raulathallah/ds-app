"use client";
import { blackColor, goldColor, primaryColor } from "@/app/_lib/color";
import currencyFormat from "@/app/_lib/format";
import ChipCustom from "@/components/Chip";
import TextCustom from "@/components/Text";
import { getReviews } from "@/redux/slices/review-services";
import { getStudioDetail } from "@/redux/slices/studio-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faBox,
  faLightbulb,
  faLocationDot,
  faSnowflake,
  faStar,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Card,
  CardBody,
  Chip,
  Divider,
  Image,
} from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const StudioDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { detail } = useSelector((state: RootState) => state.studios);
  const { data: reviewList } = useSelector((state: RootState) => state.review);
  const [imagePreview, setImagePreview] = useState("");
  const params = useParams();

  useEffect(() => {
    dispatch(getStudioDetail(params.id.toString()));
    dispatch(getReviews(parseInt(params.id.toString())));
  }, []);
  if (!detail) {
    return false;
  }
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="grid grid-cols-1 gap-2">
        <Image
          className="object-cover"
          style={{ width: "100%", aspectRatio: 1.5 }}
          src={imagePreview ? imagePreview : detail.image[0]}
        />
        <div className="flex gap-1">
          {detail.image.map((image, i) => {
            if (i > 5) {
              return;
            } else {
              return (
                <Image
                  key={image}
                  isZoomed
                  onClick={() => setImagePreview(image)}
                  className="object-cover"
                  src={image}
                  style={{ width: 200, aspectRatio: 1 }}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <TextCustom text={detail.name} type="label-lg" />
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
          <TextCustom text={detail.phone} type="label-sm" />
        </Chip>
        <Chip
          startContent={<FontAwesomeIcon icon={faInstagram} size="lg" />}
          variant="light"
          color="default"
          className="gap-2"
        >
          <TextCustom text={detail.instagram} type="label-sm" />
        </Chip>
        <Divider />
        <div className="grid grid-cols-4 gap-4">
          <Card shadow="none" style={{ border: "none" }}>
            <CardBody className="text-center gap-2">
              <FontAwesomeIcon
                icon={faSnowflake}
                size="lg"
                style={{ fontSize: 24 }}
              />
              <TextCustom text="Air Conditioner" type="label-sm" />
            </CardBody>
          </Card>
          <Card shadow="none" style={{ border: "none" }}>
            <CardBody className="text-center gap-2">
              <FontAwesomeIcon
                icon={faVolumeHigh}
                size="lg"
                style={{ fontSize: 24 }}
              />
              <TextCustom text="Speaker" type="label-sm" />
            </CardBody>
          </Card>
          <Card shadow="none" style={{ border: "none" }}>
            <CardBody className="text-center gap-2">
              <FontAwesomeIcon
                icon={faLightbulb}
                size="lg"
                style={{ fontSize: 24 }}
              />
              <TextCustom text="RGB Light" type="label-sm" />
            </CardBody>
          </Card>
          <Card shadow="none" style={{ border: "none" }}>
            <CardBody className="text-center gap-2">
              <FontAwesomeIcon
                icon={faBox}
                size="lg"
                style={{ fontSize: 24 }}
              />
              <TextCustom text="Properties" type="label-sm" />
            </CardBody>
          </Card>
        </div>

        <Divider />
        <TextCustom
          text={currencyFormat(detail.rent) + "/hour"}
          type="label-lg"
          color="green"
        />

        <div className="flex gap-2">
          <TextCustom text={"Payment method:"} type="label-sm" />
          <ChipCustom size="sm" text="Cash" color="success"></ChipCustom>
          <ChipCustom size="sm" text="Transfer" color="warning"></ChipCustom>
        </div>
        <Button color="primary" onClick={() => console.log("RENT")}>
          Rent
        </Button>
        <Divider />
        <TextCustom text={"Top Reviews"} type="label-sm" />

        {reviewList.map((rl) => (
          <div key={rl.id} className="grid gap-4">
            <div className="flex gap-4 items-center">
              <Avatar isBordered color="primary" name={rl.username} />
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
        ))}
      </div>
    </div>
  );
};

export default StudioDetail;
