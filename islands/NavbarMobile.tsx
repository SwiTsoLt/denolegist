import { useState } from "preact/hooks";

export default function NavbarMobile() {
    const [showState, setShowState] = useState<boolean>(false)

    
  return (
    <nav className={`navbarMobile ${showState ? 'show' : ''}`}>
        <button onClick={() => setShowState(v => !v)} className="toggleButton bgimage"></button>
      <div className="container">
        <div className="logo">
          <div className="logoInner">
            <a href="/">
              <span>L</span>
              <span>LEGIST.BY</span>
            </a>
          </div>
        </div>
        <div className="address">
          <a href="">
            <span className="icon bgimage"></span>
            <p>
              г. Минск, ул. М. Богдановича, 10
            </p>
          </a>
        </div>
        <div className="links">
          <a href="/">
            <span class="phoneIcon bgimage"></span>
            <p>Городской тел. 271 77 22</p>
          </a>
          <a href="/">
            <p>Реквизиты</p>
          </a>
          <a href="/consultation">
            <p>О консультации</p>
          </a>
          <a href="/lawyers">
            <p>Адвокаты</p>
          </a>
          <a href="/contacts">
            <p>Контакты</p>
          </a>
        </div>
      </div>
    </nav>
  );
}
