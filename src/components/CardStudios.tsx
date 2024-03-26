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
  faMusic,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

type StudioListItem = {
  studio: Studio;
};

import currencyFormat from "../app/_lib/format";

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
            alt={studio.image}
            className="object-cover"
            style={{ height: 250, aspectRatio: 2 }}
            src={studio.image}
          />
          <CardBody className="gap-2">
            <p className="text-2xl font-bold ">{studio.name}</p>
            <p className="text-lg font-bold">
              {currencyFormat(studio.rent)}/hour
            </p>

            <p className="text-sm">{studio.address}</p>
            <p className="text-sm font-semibold">Facilities</p>
            <div className="grid grid-cols-2 gap-1 w-[50%]">
              <Chip
                startContent={
                  <FontAwesomeIcon
                    icon={faSnowflake}
                    fontSize={18}
                    color="grey"
                  />
                }
                size="sm"
                classNames={{
                  base: "bg-transparent",
                  content: "text-black",
                }}
                color="primary"
                className="gap-1 p-3"
              >
                AC
              </Chip>
              <Chip
                startContent={
                  <FontAwesomeIcon icon={faMusic} fontSize={18} color="grey" />
                }
                variant="flat"
                color="secondary"
                size="sm"
                classNames={{
                  base: "bg-transparent",
                  content: "text-black",
                }}
                className="gap-1 p-3"
              >
                Speaker
              </Chip>
              <Chip
                startContent={
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    fontSize={18}
                    color="grey"
                  />
                }
                variant="flat"
                color="secondary"
                size="sm"
                classNames={{
                  base: "bg-transparent",
                  content: "text-black",
                }}
                className="gap-1 p-3"
              >
                RGB Light
              </Chip>
              <Chip
                startContent={
                  <FontAwesomeIcon icon={faBox} fontSize={18} color="grey" />
                }
                variant="flat"
                color="secondary"
                size="sm"
                classNames={{
                  base: "bg-transparent",
                  content: "text-black",
                }}
                className="gap-1 p-3"
              >
                Properties
              </Chip>
            </div>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default CardStudios;
