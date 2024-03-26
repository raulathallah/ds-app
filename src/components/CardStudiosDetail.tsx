import { Studio } from "@/type";
import { Card, Image } from "@nextui-org/react";

type StudioDetail = {
  data: Studio;
};
const CardStudiosDetail = ({ data }: StudioDetail) => {
  return (
    <div className="flex flex-col-2">
      <Card>
        <div>
          <Image
            alt={data.image}
            src={data.image}
            style={{ width: 600, aspectRatio: 1.5 }}
          />
        </div>
      </Card>
    </div>
  );
};

export default CardStudiosDetail;
