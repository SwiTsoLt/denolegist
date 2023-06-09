interface ITextImage {
  src: string;
  position?: string;
}

interface ITextImageSectionProps {
  title: string;
  text: string;
  image: ITextImage;
  isHeader?: boolean;
}

export default function TextImageSection(props: ITextImageSectionProps) {
  return (
    <div
      class={`textImage bgimage ${
        props.image.position ? "bg-pos-" + props.image.position : "center"
      } ${props.isHeader ? "isHeader" : ""}`}
      style={`
      background-image: url(${props.image.src});
      `}
    >
      <div className="wall"></div>
      <div className="container">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
