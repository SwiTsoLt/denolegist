import NavbarMobile from "../islands/NavbarMobile.tsx";

export interface ILink {
  name: string;
  url: string;
}

export default function Navbar() {
  const dataLinks: ILink[] = [
    { name: "Реквизиты", url: "https://moka.by/index.php/rekvizity" },
    { name: "О консультации", url: "/consultation" },
    { name: "Адвокаты", url: "/lawyers" },
    { name: "Контакты", url: "/contacts" },
  ];

  return (
    <>
      <nav class="navbarDesktop">
        <div className="container">
          <div className="left">
            <div className="logo">
              <div className="logoInner">
                <a href="/">
                  <span>L</span>
                  <span>LEGIST.BY</span>
                </a>
              </div>
            </div>
            <div className="slogan">
              <p>
                Правовая помощь
                <br />в самом центре столицы
              </p>
            </div>
            <div className="address">
              <a href="https://yandex.com/maps/-/CCUGZZqbTD">
                <span className="icon bgimage"></span>
                <p>г. Минск, ул. М. Богдановича, 10</p>
              </a>
            </div>
          </div>
          <div className="right">
            <a href="/">
              <span class="phoneIcon bgimage"></span>
              <p>Городской тел. 271 77 22</p>
            </a>
            {dataLinks.map((link) => {
              return (
                <a href={link.url}>
                  <p>{link.name}</p>
                </a>
              );
            })}
          </div>
        </div>
      </nav>
      <NavbarMobile dataLinks={dataLinks} />
    </>
  );
}
