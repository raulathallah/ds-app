type TextProps = {
  text: string;
  type: string;
  color?: string;
};

const TextCustom = (props: TextProps) => {
  if (props.type === "label-lg") {
    return (
      <p className="text-2xl font-bold" style={{ color: props.color }}>
        {props.text}
      </p>
    );
  } else if (props.type === "label-md") {
    return (
      <p className="text-lg" style={{ color: props.color }}>
        {props.text}
      </p>
    );
  } else if (props.type === "label-sm") {
    return (
      <p className="text-base" style={{ color: props.color }}>
        {props.text}
      </p>
    );
  } else {
    return (
      <p className="text-xs" style={{ color: props.color }}>
        {props.text}
      </p>
    );
  }
};

export default TextCustom;
