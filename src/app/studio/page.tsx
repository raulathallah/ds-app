"use client";
import CardStudios from "@/components/CardStudios";
import { getStudioDetail, getStudios } from "@/redux/slices/studio-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StudioList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, detail } = useSelector((state: RootState) => state.studios);
  useEffect(() => {
    dispatch(getStudios());
  }, []);
  return (
    <div className="flex flex-auto w-full gap-8">
      <div className="grid grid-cols-2 gap-12">
        {data.map((v, i) => {
          return (
            <div key={v.id}>
              <CardStudios studio={data[i]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudioList;
