import { MyHead, Navbar } from "../components/_index.tsx";
import MyFooter from "../islands/myFooter.tsx";
import { getData } from "./index.tsx";

export interface ILawyer {
  name: string;
  imageName: string;
  linkName: string;
  about: string;
}


export default function Lawyers() {

  const lawyersData = getData("lawyers")

  return (
    <>
      <MyHead
        title="Адвокаты"
        styles={[{ rel: "stylesheet", href: "/styles/lawyers.css" }]}
      />
      <div className="lawyers">
        <Navbar />
        <main>
          <div className="container">
            <div className="zav">
              <a href="/lawyers/martsinkevich-oleg-igorevich" className="bgimage">
                <p>Марцинкевич Олег Игоревич</p>
              </a>
              <div className="text">
                <p>
                  Заведующий Минской областной специализированной юридической
                  консультацией по оказанию правовой помощи субъектам
                  хозяйствования
                </p>
              </div>
            </div>
            <div className="lawyersList">
              {lawyersData.slice(1).map((lawyer: ILawyer) => (
                <a
                  href={`/lawyers/${lawyer.linkName}`}
                  className="bgimage"
                  style={`background-image: url("../media/lawyers/${lawyer.imageName}");`}
                >
                  <p>{lawyer.name}</p>
                </a>
              ))}
            </div>
          </div>
        </main>
        <MyFooter />
      </div>
    </>
  );
}