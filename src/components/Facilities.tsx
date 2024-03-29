import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody } from "@nextui-org/react";
import TextCustom from "./Text";

type Facilities = {
  icon: any;
  text: string;
};

const FacilitiesComponent = (e: Facilities) => {
  return (
    <Card shadow="none" style={{ border: "none" }}>
      <CardBody className="text-center gap-2">
        <FontAwesomeIcon icon={e.icon} style={{ fontSize: 24 }} />
        <TextCustom text={e.text} type="label-xs" />
      </CardBody>
    </Card>
  );
};

export default FacilitiesComponent;
