import { Studio } from "@/type";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";

type StudioListItem = {
  studio: Studio;
};

import currencyFormat from "../app/_lib/format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            style={{ height: 300, aspectRatio: 2 }}
            src={studio.image}
          />
          <CardBody className="gap-2">
            <p className="text-2xl font-bold ">{studio.name}</p>
            <p className="text-sm">{studio.address}</p>

            <div>
              <p className="text-sm font-semibold">Facilities</p>
              <p>ICON</p>
              <FontAwesomeIcon icon="temperature-three-quarters" />
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
            </div>
            <p className="text-sm font-semibold">
              {currencyFormat(studio.rent)}/hour
            </p>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default CardStudios;
