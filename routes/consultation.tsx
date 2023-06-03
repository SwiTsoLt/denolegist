import { MyHead, Navbar } from "../components/_index.tsx";
import MyFooter from "../islands/myFooter.tsx";
import GallerySection from "../islands/gallery.tsx";
import {
  TextSection,
  SignUpSection,
  TextImageSection,
} from "../components/sections/_index.tsx";
import { getData } from "./index.tsx";

export default function Consultation() {
  return (
    <>
      <MyHead
        title="О консультации"
        styles={[
          { rel: "stylesheet", href: "/styles/consultation.css" },
          { rel: "stylesheet", href: "/styles/sections/signup.css" },
          { rel: "stylesheet", href: "/styles/sections/gallery.css" },
          { rel: "stylesheet", href: "/scripts/fancybox/fancybox.css" },
          { rel: "stylesheet", href: "/styles/sections/text.css" },
          { rel: "stylesheet", href: "/styles/sections/textImage.css" },
        ]}
        scripts={[{ src: "/scripts/fancybox/fancybox.umd.js", defer: true }]}
      />
      <div className="consultation">
        <Navbar />
        <TextImageSection
          title="Профессиональный опыт адвокатов"
          text="Профессиональный опыт адвокатов Спец.ЮК удостоен самых высоких оценок
        юридического сообщества. За добросовестный труд и качество работы
        коллективу нашей консультации были присуждены такие виды наград
        юридического сообщества, как высшая юридическая премия ”Фемида“ в
        номинации ”Правозащитник“; Министерством юстиции Республики Беларусь
        неоднократно объявлялись благодарности за добросовестный труд в
        органах юстиции по защите прав и свобод граждан адвокату Олегу
        Игоревичу Марцинкевичу (неоднократно), адвокату Владимиру Васильевичу
        Косику. При проведении конкурса на приз имени В.Д.Спасовича адвокат
        Спец.ЮК Ольга Николаевна Герменчук награждена дипломом за
        деятельность, направленную на повышение роли и значения права,
        развитие правовой культуры граждан."
          image={{
            src: "../../media/consultation/experience.jpg",
            position: "top",
          }}
          isHeader
        />
        <main>
          <GallerySection
            imageList={[
              {
                src: "/media/consultation/gallery/photo_2023-03-20_14-49-18.jpg",
              },
              {
                src: "/media/consultation/gallery/photo_2023-03-20_14-49-41.jpg",
              },
              {
                src: "/media/consultation/gallery/photo_2023-03-20_14-49-46.jpg",
              },
              {
                src: "/media/consultation/gallery/photo_2023-03-20_14-49-51.jpg",
              },
            ]}
          />
          <TextSection
            title="Наша команда"
            text="Кроме индивидуального подхода мы можем предложить и практическую помощь команды, владеющей в полной мере вопросами организации и сопровождения бизнеса, защиты и представления интересов в судебных, административных и правоохранительных органах. В настоящее время коллектив Спец.ЮК состоит из 15 человек. У нас практикуют как опытные, так и молодые, но очень увлеченные профессиональной деятельностью адвокаты."
          />
          <SignUpSection />
          <TextImageSection
            title="Кому мы оказываем помощь?"
            text="Адвокаты Спец.ЮК оказывают правовую помощь по вопросам, возникающим как в хозяйственной деятельности субъектов хозяйствования, так и вопросам возникающим у физических лиц в сферах уголовного, гражданского, семейного, административного, жилищного, земельного и иных отраслей права органах."
            image={{ src: "../../media/consultation/work.jpg" }}
          />
        </main>
        <MyFooter />
      </div>
    </>
  );
}
