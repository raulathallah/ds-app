"use client";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import img1 from "../../assets/images/intro-1.jpg";
import img2 from "../../assets/images/intro-2.jpg";
import img3 from "../../assets/images/intro-3.jpg";
import { goldColor, secondaryColor } from "./_lib/color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { User } from "@/type";
import user from "./_lib/user";

export default function Home() {
  const userData: User = user();
  return (
    <div className="grid grid-cols-2 gap-8">
      <Image
        className="object-contain"
        radius="none"
        style={{ width: "100%" }}
        alt={img1.src}
        src={img1.src}
      />
      <Card shadow="none" style={{ border: "none" }} className="p-24 gap-0">
        <CardBody>
          <p
            className="text-5xl font-bold"
            style={{
              color: secondaryColor,
            }}
          >
            Dance Space
          </p>
          <p className="italic">For Dancers from Dancers</p>
        </CardBody>
        <CardBody>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            placerat mollis urna ac maximus.Duis ullamcorper eu augue at
            feugiat. Nunc eget tempus mi.
          </p>
        </CardBody>
        <CardBody>
          {!userData ? (
            <Button
              as={Link}
              color="primary"
              style={{ width: "40%" }}
              endContent={<FontAwesomeIcon icon={faArrowRight} />}
              href="/login"
            >
              Get Started
            </Button>
          ) : (
            <Button
              as={Link}
              color="primary"
              style={{ width: "40%" }}
              endContent={<FontAwesomeIcon icon={faArrowRight} />}
              href="/studio"
            >
              Search Studio
            </Button>
          )}
        </CardBody>
      </Card>
      <Card shadow="none" style={{ border: "none" }} className="p-24 gap-0">
        <CardBody className="gap-6">
          <p
            className="text-5xl font-bold"
            style={{
              color: secondaryColor,
            }}
          >
            What we offer?
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            placerat mollis urna ac maximus.Duis ullamcorper eu augue at
            feugiat. Nunc eget tempus mi.
          </p>
        </CardBody>
      </Card>
      <div style={{ position: "relative" }}>
        <Image
          className="object-contain p-1"
          radius="none"
          style={{
            width: "75%",
            position: "relative",
            top: 0,
            left: 0,
            border: `2px solid gainsboro`,
          }}
          alt={img2.src}
          src={img2.src}
        />
        <Image
          className="object-contain p-1"
          radius="none"
          style={{
            width: "75%",
            position: "relative",
            top: "-150px",
            left: "150px",
            border: `2px solid gainsboro`,
          }}
          alt={img3.src}
          src={img3.src}
        />
      </div>
    </div>
  );
}
