export default function Navbar() {
  return (
    <nav>
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
          <a href="/">
            <p>Реквизиты</p>
          </a>
          <a href="/">
            <p>О консультации</p>
          </a>
          <a href="/">
            <p>Адвокаты</p>
          </a>
          <a href="/">
            <p>Контакты</p>
          </a>
        </div>
      </div>
    </nav>
  );
}
