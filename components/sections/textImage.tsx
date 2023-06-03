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
      class="textImage bgimage"
      style={`
      background-image: url(${props.image.src});
      padding-top: ${
        props.isHeader ? "calc(var(--nav-h) + var(--p-m))" : "var(--p-m)"
      };
      background-position: ${props.image.position ?? "center"};
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
