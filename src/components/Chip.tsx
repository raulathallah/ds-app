import { Chip } from "@nextui-org/react";

type ChipProps = {
  text: string;
  size: "sm" | "md" | "lg" | undefined;
};

const ChipCustom = (props: ChipProps) => {
  return (
    <Chip
      variant="dot"
      color="primary"
      size={props.size}
      className="border-none"
    >
      {props.text}
    </Chip>
  );
};

export default ChipCustom;
