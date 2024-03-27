import { Studio } from "@/type";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faLightbulb,
  faLocationDot,
  faMusic,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

import currencyFormat from "../app/_lib/format";
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
          <CardBody className="gap-3">
            <p className="text-2xl font-bold ">{studio.name}</p>
            <p className="text-lg font-bold">
              {currencyFormat(studio.rent)}/hour
            </p>
            <div className="text-sm flex gap-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                fontSize={18}
                color="black"
              ></FontAwesomeIcon>
              <p>{studio.address}</p>
            </div>

            <div className="grid grid-cols-1">
              <p className="text-sm font-semibold">Facilities</p>
              {studio.isAC && (
                <Chip variant="light" color="secondary" size="sm">
                  AC
                </Chip>
              )}
              {studio.isSpeaker && (
                <Chip variant="light" color="secondary" size="sm">
                  Speaker
                </Chip>
              )}
              {studio.isRGB && (
                <Chip variant="light" color="secondary" size="sm">
                  RGB Light
                </Chip>
              )}
              {studio.isProperties && (
                <Chip variant="light" color="secondary" size="sm">
                  Properties
                </Chip>
              )}
            </div>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default CardStudios;
