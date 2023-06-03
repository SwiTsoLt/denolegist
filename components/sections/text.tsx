interface ITextSectionProps {
  title: string, 
  text: string
}

export default function TextSection(props: ITextSectionProps) {
  return (
    <section className="help">
      <div className="container">
        <div className="content">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </section>
  );
}
