"use client";
import { getStudioDetail, getStudios } from "@/redux/slices/studio-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { Card, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const StudioDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { detail } = useSelector((state: RootState) => state.studios);

  const [imagePreview, setImagePreview] = useState("");
  useEffect(() => {
    dispatch(getStudioDetail("1"));
  }, []);
  if (!detail) {
    return false;
  }
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="grid gap-1 w-full">
        <Card className="w-fit">
          <Image
            radius="none"
            className="object-cover"
            style={{ width: "100%", aspectRatio: 1.5 }}
            src={imagePreview ? imagePreview : detail.image[0]}
          />
        </Card>

        <div className="flex gap-1">
          {detail.image.map((image, i) => {
            if (i > 5) {
              return;
            } else {
              return (
                <Card
                  className="w-fit"
                  isPressable
                  key={image}
                  onPress={() => setImagePreview(image)}
                >
                  <Image
                    isZoomed
                    className="object-cover"
                    src={image}
                    style={{ width: "144px", height: "144px" }}
                  />
                </Card>
              );
            }
          })}
        </div>
      </div>
      <div>
        <p>{detail.name}</p>
      </div>
    </div>
  );
};

export default StudioDetail;
