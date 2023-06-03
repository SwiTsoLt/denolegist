import { useEffect, useRef, useState } from "preact/hooks";
import { ILawyer } from "../routes/lawyers.tsx";

interface ILawyerProps {
  name: string;
  lawyersData: ILawyer[];
}

export default function Lawyer(props: ILawyerProps) {
  const [lawyer, setLawyer] = useState<ILawyer>({
    name: "",
    imageName: "",
    linkName: "",
    about: "",
  });
  const aboutRef = useRef<HTMLParagraphElement>(null);

  function getLawyer(name: string) {
    const candidate: ILawyer = props.lawyersData.filter(
      (l: ILawyer) => l.linkName === name
    )[0];
    setLawyer(candidate);
  }

  function setAboutInfo() {
    if (aboutRef.current) {
      aboutRef.current.innerHTML = lawyer.about
    }
  }

  useEffect(() => {
    setAboutInfo();
  }, [lawyer])

  useEffect(() => {
    getLawyer(props.name);
  }, []);

  return (
    <div className="lawyer">
      <div className="container">
        <div className="avatar">
          <img src={`../media/lawyers/${lawyer.imageName}`} alt={lawyer.name} />
        </div>
        <div className="about">
          <h1>{lawyer.name}</h1>
          <p ref={aboutRef}></p>
        </div>
      </div>
    </div>
  );
}
