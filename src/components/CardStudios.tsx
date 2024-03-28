import { Studio } from "@/type";
import { Card, CardBody, Chip, Divider, Image, Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import currencyFormat from "../app/_lib/format";
import TextCustom from "./Text";
import ChipCustom from "./Chip";
type StudioListItem = {
  studio: Studio;
};
const CardStudios = ({ studio }: StudioListItem) => {
  return (
    <div>
      <Link href={`/studio/${studio.id}`}>
        <Card
          shadow="none"
          key={studio.id}
          isPressable
          style={{ border: "none" }}
          className="grid grid-cols-2 p-2"
        >
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={studio.image[0]}
            className="object-cover"
            style={{ height: 250, aspectRatio: 2 }}
            src={studio.image[0]}
          />
          <CardBody className="gap-2">
            <TextCustom text={studio.name} type="label-lg" />
            <TextCustom
              text={currencyFormat(studio.rent) + "/hour"}
              type="label-md"
            />

            <div className="text-sm flex gap-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                fontSize={18}
                color="black"
              ></FontAwesomeIcon>
              <TextCustom text={studio.address} type="label-sm" />
            </div>
            <Divider />
            <TextCustom text="Facilities:" type="" />
            <div className="grid grid-cols-2 gap-1">
              {studio.isAC && <ChipCustom size="sm" text="AC" />}
              {studio.isSpeaker && <ChipCustom size="sm" text="Speaker" />}
              {studio.isRGB && <ChipCustom size="sm" text="RGB Light" />}
              {studio.isProperties && (
                <ChipCustom size="sm" text="Properties" />
              )}
            </div>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default CardStudios;
