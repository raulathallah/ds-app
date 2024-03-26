"use client";
import Studios from "@/assets/data/studios";
import CardStudios from "@/components/CardStudios";
import CardStudiosDetail from "@/components/CardStudiosDetail";
import { Studio } from "@/type";
import { Button, Card, Divider, Image } from "@nextui-org/react";
import { useState } from "react";

const StudioList = () => {
  const data = Studios;

  const [preview, setPreview] = useState<Studio>();

  return (
    <div className="flex flex-auto w-full gap-8">
      <div className="grid grid-cols-2 gap-12">
        {data.map((v, i) => {
          if (i !== data.length - 1) {
            return (
              <>
                <CardStudios studio={data[i]} />
              </>
            );
          } else {
            return <CardStudios studio={data[i]} />;
          }
        })}
      </div>
      <div></div>
    </div>
  );
};

export default StudioList;
