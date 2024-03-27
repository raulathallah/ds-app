"use client";
import CardStudios from "@/components/CardStudios";
import { getStudios } from "@/redux/slices/studio-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StudioList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.studios);
  useEffect(() => {
    dispatch(getStudios());
  }, []);
  return (
    <div className="flex flex-auto w-full gap-8">
      <div className="grid grid-cols-2 gap-12">
        {data.map((v, i) => {
          return (
            <>
              <CardStudios studio={data[i]} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default StudioList;
