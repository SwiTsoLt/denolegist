import { MyHead, Navbar } from "../components/_index.tsx";
import MyFooter from "../islands/myFooter.tsx";
import { SignUpSection, TextSection } from "../components/sections/_index.tsx";
import {join, dirname} from "https://deno.land/std@0.177.1/path/mod.ts";

export function getData(key: string): any {
  const filePath = join(dirname.name, "../", "static", "data.json")
  const file = Deno.readTextFileSync(filePath)
  const fileParsed = JSON.parse(file)[key]
  return fileParsed
}

export default function Home() {
  return (
    <>
      <MyHead
        title="Главная"
        styles={[
          { rel: "stylesheet", href: "/styles/main.css" },
          { rel: "stylesheet", href: "/styles/sections/signup.css" },
          { rel: "stylesheet", href: "/styles/sections/text.css" },
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
          <TextSection
            title="Кому мы оказываем помощь?"
            text="Адвокаты Спец.ЮК оказывают правовую помощь по вопросам, возникающим
            как в хозяйственной деятельности субъектов хозяйствования, так и
            вопросам возникающим у физических лиц в сферах уголовного,
            гражданского, семейного, административного, жилищного, земельного и
            иных отраслей права. органах."
          />
        </main>
        <MyFooter />
      </div>
    </>
  );
}
