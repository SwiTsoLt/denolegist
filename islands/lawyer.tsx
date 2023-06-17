import { useEffect, useRef, useState } from "preact/hooks";
import { ILawyer } from "../routes/lawyers.tsx";
import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.38/deno-dom-wasm.ts";

interface ILawyerProps {
  name: string;
  lawyersData: ILawyer[];
}

export default function Lawyer(props: ILawyerProps) {
  const aboutRef = useRef<HTMLParagraphElement>(null);

  const lawyer: ILawyer =
    props.lawyersData.filter((l: ILawyer) => l.linkName === props.name)[0];

  useEffect(() => {
    if (aboutRef.current) {
      aboutRef.current.innerHTML = lawyer.about;
    }
  }, []);

  return (
    <div className="lawyer">
      <div className="container">
        <div className="avatar">
          <img src={`../media/lawyers/${lawyer.imageName}`} alt={lawyer.name} />
        </div>
        <div className="about">
          <h1>{lawyer.name}</h1>
          <p ref={aboutRef}>Загрузка...</p>
        </div>
      </div>
    </div>
  );
}
