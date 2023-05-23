import { MyHead, Navbar  } from "../components/_index.tsx";
import Footer from "../islands/Footer.tsx"
import {SignUpSection, HelpSection} from "../components/sections/_index.tsx";

export default function Home() {
  return (
    <>
      <MyHead
        title="Legist"
        styles={[
          { rel: "stylesheet", href: "/styles/main.css" },
          { rel: "stylesheet", href: "/styles/sections/signup.css" },
          { rel: "stylesheet", href: "/styles/sections/help.css" }
        ]}
      />
      <div class="home">
        <Navbar />
        <header>
          <div className="bg bgimage"></div>
          <div className="container">
            <div className="title">
              <h1>Попали в сложную правовую ситуацию?</h1>
            </div>
            <div className="text">
              <h1>Наша юридическая консультация это</h1>
              <ul>
                <li>
                  <span class="bgimage"></span>
                  <p>Команда профессиональных юристов</p>
                </li>
                <li>
                  <span class="bgimage"></span>
                  <p>Помощь в решении сложных юридических задач</p>
                </li>
                <li>
                  <span class="bgimage"></span>
                  <p>Многолетний стаж успешной юридической практики</p>
                </li>
              </ul>
              <p>
                Адвокаты специализированной юридической консультации по оказанию
                правовой помощи субъектам хозяйствования успешно занимаются
                оказанием правовой помощи юридическим лицам, индивидуальным
                предпринимателям и физическим лицам.
              </p>
              <p>
                Специализированная юридическая консультация по оказанию правовой
                помощи субъектам хозяйствования (Спец.ЮК) Минской областной
                коллегии адвокатов была создана в 2003 году креативными
                адвокатами Минской областной коллегии адвокатов&nbsp;
                <a href="">Марцинкевичем О.И.</a>,&nbsp;
                <a href="">Дегтяревым С.И.</a>, <a href="">Косиком В.В.</a>
                &nbsp;и&nbsp;
                <a href="">Мицкевич С.Н.</a>
              </p>
            </div>
          </div>
        </header>
        <main>
          <SignUpSection />
          <HelpSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
