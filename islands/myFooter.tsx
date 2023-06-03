import { useEffect, useRef } from "preact/hooks";
import { getData } from "../routes/index.tsx";
import { ILawyer } from "../routes/lawyers.tsx";

interface IMyFooterProps {
  lawyersData?: ILawyer[]
}

export default function MyFooter(props: IMyFooterProps) {
  const breadcrumbsRef = useRef<HTMLDivElement>(null);

  function getBreadcrumbs(): string {
    let breadcrumbs = "";

    const path = new URL(document.URL).pathname;

    if (path === "/") {
      breadcrumbs += "Главная";
    } else {
      breadcrumbs += '<a href="/">Главная</a> / ';
    }

    const layersList = path.split("/");

    switch (layersList[1]) {
      case "consultation":
        breadcrumbs += layersList.length > 2
          ? '<a href="/consultation">О консультации</a> / '
          : "О консультации";
        break;
      case "lawyers":
        breadcrumbs += layersList.length > 2
          ? '<a href="/lawyers">Адвокаты</a> / '
          : "Адвокаты";
        break;
      case "contacts":
        breadcrumbs += layersList.length > 2
          ? '<a href="/contacts">Контакты</a> / '
          : "Контакты";
        break;

      default:
        break;
    }

    if (layersList.length === 3 && props.lawyersData) {
      const candidate: ILawyer[] = props.lawyersData.filter((lawyer: ILawyer) => lawyer.linkName === layersList[2])
      breadcrumbs += candidate[0].name
    }

    return breadcrumbs;
  }

  useEffect(() => {
    if (breadcrumbsRef.current) {
      breadcrumbsRef.current.innerHTML = getBreadcrumbs();
    }
  }, []);

  return (
    <footer>
      <div className="breadcrumbs">
        <div ref={breadcrumbsRef} className="container"></div>
      </div>
      <div className="middle">
        <div className="container">
          <div className="sitemap">
            <strong>Карта сайта</strong>
            <a href="/">Главная</a>
            <a href="/consultation">О консультации</a>
            <a href="">Адвокаты</a>
            <a href="">Реквизиты</a>
            <a href="">Контакты</a>
          </div>
          <div className="address">
            <strong>Наш адрес</strong>
            <a href="https://yandex.com/maps/-/CCUGZZqbTD">
              220029 г.Минск, ул. М.Богдановича 10
            </a>
            <a href="tel:+375172717722">т/ф +375 17 271 77 22</a>
          </div>
        </div>
      </div>
      <div className="law">
        <div className="container">
          <small>
            © 2023 Специализированная юридическая консультация. Все права
            защищены.
          </small>
        </div>
      </div>
    </footer>
  );
}
