import { Favorite, Studio } from "@/type";
import { Card, CardBody, Chip, Divider, Image, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import currencyFormat from "../app/_lib/format";
import TextCustom from "./Text";
import ChipCustom from "./Chip";
import { blackColor, goldColor } from "@/app/_lib/color";
type StudioListItem = {
  studio: Studio;
  favorite: boolean | null;
};
const CardStudios = ({ studio, favorite }: StudioListItem) => {
  return (
    <div>
      <Link href={`/studio/${studio.id}`}>
        <Card
          shadow="sm"
          key={studio.id}
          style={{ border: "none" }}
          className="grid grid-cols-2"
        >
          <Image
            radius="none"
            width="100%"
            alt={studio.image[0]}
            className="object-cover"
            style={{ height: 250, aspectRatio: 2 }}
            src={studio.image[0]}
          />
          <CardBody className="gap-2">
            <div className="flex justify-between">
              <TextCustom text={studio.name} type="label-lg" />
              {favorite !== null && (
                <FontAwesomeIcon
                  icon={faBookmark}
                  color={favorite ? goldColor : "gainsboro"}
                />
              )}
            </div>
            <TextCustom
              text={currencyFormat(studio.rent) + "/hour"}
              type="label-md"
              color="green"
            />

            <div className="text-sm flex gap-2">
              <TextCustom text={studio.address} type="" />
            </div>
            <Divider />
            <TextCustom text="Facilities:" type="" />
            <div className="grid grid-cols-2 gap-1">
              {studio.isAC && (
                <ChipCustom
                  size="sm"
                  text="Air Conditioner"
                  variant="dot"
                  color="secondary"
                />
              )}
              {studio.isSpeaker && (
                <ChipCustom
                  size="sm"
                  text="Speaker"
                  variant="dot"
                  color="secondary"
                />
              )}
              {studio.isRGB && (
                <ChipCustom
                  size="sm"
                  text="RGB Light"
                  variant="dot"
                  color="secondary"
                />
              )}
              {studio.isProperties && (
                <ChipCustom
                  size="sm"
                  text="Properties"
                  variant="dot"
                  color="secondary"
                />
              )}
            </div>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default CardStudios;
