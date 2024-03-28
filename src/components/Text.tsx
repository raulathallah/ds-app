type TextProps = {
  text: string;
  type: string;
};

const TextCustom = (props: TextProps) => {
  if (props.type === "label-lg") {
    return <p className="text-2xl font-bold">{props.text}</p>;
  } else if (props.type === "label-md") {
    return <p className="text-lg font-medium">{props.text}</p>;
  } else if (props.type === "label-sm") {
    return <p className="text-xs font-medium">{props.text}</p>;
  } else {
    return <p className="text-xs">{props.text}</p>;
  }
};

export default TextCustom;
