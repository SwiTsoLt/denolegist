import { useEffect, useRef } from "preact/hooks";

export default function Footer() {
  const breadcrumbsRef = useRef<HTMLDivElement>(null);

  function getBreadcrumbs(): void {
    const path = new URL(document.URL).pathname;
    console.dir(path);

    if (!breadcrumbsRef.current) return;

    if (path === "/") {
      breadcrumbsRef.current.innerHTML = '<a href="/">Legist</a>';
      return;
    }

    const getPath = (i: number, j: number, acc: string, cur: string) =>
      j <= i ? acc + "/" + cur : acc;
    const getPathLine = (i: number) =>
      path.split("/").reduce((acc, cur, j) => getPath(i, j, acc, cur));
    const getBreadcrumbLink = (index: number, cur: string) =>
      `&nbsp;>&nbsp;<a href="${getPathLine(index)}">${cur}</a>`;
    const getBreadcrumbLinkLine = () =>
      path
        .split("/")
        .reduce((acc, cur, ind) => acc + getBreadcrumbLink(ind, cur));

    breadcrumbsRef.current.innerHTML = `<a href="/">Legist</a> ${getBreadcrumbLinkLine()}`;
  }

  useEffect(() => {
    getBreadcrumbs();
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="breadcrumbs" ref={breadcrumbsRef}></div>
        <div className="sitemap">
          <div>
            <p>Карта сайта</p>
            <a href="">Главная</a>
            <a href="">О консультации</a>
            <a href="">Адвокаты</a>
            <a href="">Реквизиты</a>
            <a href="">Контакты</a>
          </div>
          <div>
            <p>Наш адрес</p>
            <a href="https://yandex.com/maps/-/CCUGZZqbTD">
              220029 г.Минск, ул. М.Богдановича 10
            </a>
            <a href="tel:+375172717722">т/ф +375 17 271 77 22</a>
          </div>
        </div>
        <small>
          © 2023 Специализированная юридическая консультация. Все права
          защищены.
        </small>
      </div>
    </footer>
  );
}
