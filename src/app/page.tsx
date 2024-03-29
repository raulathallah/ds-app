"use client";
import { Image } from "@nextui-org/react";
import img from "../../assets/images/intro-1.jpg";

export default function Home() {
  return (
    <div>
      <div>INTRO</div>
      <Image width={1000} alt={img.src} src={img.src} />
      <div>MY FAVORITE</div>
    </div>
  );
}
