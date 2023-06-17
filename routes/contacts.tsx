import { useEffect } from "preact/hooks";
import MyHead from "../components/MyHead.tsx";
import Navbar from "../components/Navbar.tsx";
import MyFooter from "../islands/myFooter.tsx";

export default function Contacts() {
  function startYMaps() {
    // @ts-ignore: ymaps
    ymaps.ready(init);

    function init() {
      // @ts-ignore: ymaps
      const myMap = new ymaps.Map("map", {
          center: [53.912845, 27.561094],
          zoom: 17,
        }, {
          searchControlProvider: "yandex#search",
        }),
        // @ts-ignore: ymaps
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
        ),
        // @ts-ignore: ymaps

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: "Специализированная юридическая консультация",
          balloonContent: null,
        }, {
          iconLayout: "default#image",
          iconImageHref: "../media/contacts/ymaps_target.png",
          iconImageSize: [30, 40],
          iconImageOffset: [-5, -38],
        });

      myMap.geoObjects
        .add(myPlacemark)
        .add(MyIconContentLayout);
    }
  }

  useEffect(() => {
    startYMaps();
  });

  return (
    <>
      <MyHead
        title="Контакты"
        styles={[
          { rel: "stylesheet", href: "/styles/contacts.css" },
        ]}
        scripts={[
          {
            src:
              "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=cbeeee33-4a59-40bd-96bd-5ed0ddf6a330",
          },
        ]}
      />
      <Navbar />
      <div className="contacts">
        <main>
          <div className="container">
            <div className="contactsInner">
              <div className="title">
                <h2>
                  Специализированная юридическая консультация по оказанию
                  правовой помощи субъектам хозяйствования
                </h2>
              </div>
              <div className="address">
                <div className="icon bgimage"></div>
                <a href="https://yandex.com/maps/-/CCUGZZqbTD" target="_blank">
                  220029 г.Минск, ул. М.Богдановича 10
                </a>
              </div>
              <div className="phone">
                <div className="icon bgimage"></div>
                <p>
                  т/ф&nbsp;<a href="tel:+375172717722">+375 17 271 77 22</a>
                </p>
              </div>
            </div>
            <div className="map">
              <div id="map"></div>
            </div>
          </div>
        </main>
      </div>
      <MyFooter />
    </>
  );
}

// https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=cbeeee33-4a59-40bd-96bd-5ed0ddf6a330
