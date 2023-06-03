import { useEffect } from "preact/hooks";
import MyHead from "../components/MyHead.tsx";
import Navbar from "../components/Navbar.tsx";
import MyFooter from "../islands/myFooter.tsx";

export default function Contacts() {
  function startYMaps() {
    // @ts-ignore: ymaps
    ymaps.ready(function () {
      // @ts-ignore: ymaps
      const myMap = new ymaps.Map("map", {
          center: [53.912845, 27.561094],
          zoom: 17,
        }, {
          searchControlProvider: "yandex#search",
        }),
        // Создаём макет содержимого.
        // @ts-ignore: ymaps
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
        ),
        // @ts-ignore: ymaps
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: "Специализированная юридическая консультация",
          balloonContent: null,
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "../media/contacts/ymaps_target.png",
          // Размеры метки.
          iconImageSize: [30, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
        });

      myMap.geoObjects
        .add(myPlacemark)
        // @ts-ignore: ymaps
        .add(myPlacemarkWithContent);
    });
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
              "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=cbeeee33-4a59-40bd-96bd-5ed0ddf6a330",
          },
        ]}
      />
      <Navbar />
      <div className="contacts">
        <main>
          <div className="container">
            <div id="map"></div>
          </div>
        </main>
      </div>
      <MyFooter />
    </>
  );
}
