"use client";
import { getStudioDetail } from "@/redux/slices/studio-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { Image } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ImageSlot = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { detail } = useSelector((state: RootState) => state.studios);
  const [imagePreview, setImagePreview] = useState("");
  const params = useParams();
  useEffect(() => {
    dispatch(getStudioDetail(params.id.toString()));
  }, []);
  if (!detail) {
    return false;
  }
  return (
    <div className="grid grid-cols-1 gap-1">
      <Image
        className="object-cover w-full"
        radius="none"
        src={imagePreview ? imagePreview : detail.image[0]}
      />

      <div className="flex">
        {detail.image.map((image, i) => {
          if (i > 3) {
            return;
          } else {
            return (
              <Image
                key={image}
                isZoomed
                radius="none"
                onClick={() => setImagePreview(image)}
                className="object-cover"
                src={image}
                style={{ height: 150, width: 200 }}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ImageSlot;
