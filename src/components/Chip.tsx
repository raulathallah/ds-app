import { Chip } from "@nextui-org/react";

type ChipProps = {
  text: string;
  size: "sm" | "md" | "lg" | undefined;
  variant?:
    | "dot"
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | undefined;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
};

const ChipCustom = (props: ChipProps) => {
  return (
    <Chip
      variant={props.variant ? props.variant : "flat"}
      color={props.color}
      size={props.size}
      className="border-none"
    >
      {props.text}
    </Chip>
  );
};

export default ChipCustom;
