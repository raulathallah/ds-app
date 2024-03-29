"use client";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <>
      <Chip
        as={Link}
        variant="light"
        startContent={<FontAwesomeIcon icon={faArrowLeft} />}
        className="p-4"
        href={"#"}
        onClick={router.back}
      >
        Back
      </Chip>
    </>
  );
};
export default BackButton;
