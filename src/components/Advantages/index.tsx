import React from "react";
import "./style.css";
import img1 from "../../assets/img/Advantages/img1.webp";
import img2 from "../../assets/img/Advantages/img2.webp";
import img3 from "../../assets/img/Advantages/img3.webp";
import img4 from "../../assets/img/Advantages/img4.webp";

interface AdvantageItem {
  title: string;
  description: string;
  image: string;
}

const Advantages: React.FC = () => {
  const advantagesData: AdvantageItem[] = [
    {
      title: "Профессиональные водители",
      description: "Стаж наших водителей 10+ лет.",
      image: img1,
    },
    {
      title: "Безопасность",
      description: "С нами вы доберетесь домой в целости и сохранности.",
      image: img2,
    },
    {
      title: "Оперативность",
      description:
        "Наши водители прибудут к вашему местоположению в течении 10-15 минут.",
      image: img3,
    },
    {
      title: "Условия",
      description:
        "Водители не несут ответственности за личные вещи!Перед оплатой проверьте на наличие ценных вещей и документов!При посадке сверяйте номера водителей!В случае происшествия ДТП ответственность несут водители! Наши водители не несут ответственности за качество дорог в Кыргызстане!За ложный вызов неустойка от 200 сом!Будьте вежливы и уважайте водителя!",
      image: img4,
    },
  ];

  return (
    <section
      className="advantages"
      itemScope
      itemType="http://schema.org/Organization"
    >
      <h2 className="advantages__title">НАШИ ПРЕИМУЩЕСТВА</h2>

      <div className="advantages__list">
        {advantagesData.map((advantage, index) => (
          <React.Fragment key={index}>
            <div className="advantages__item">
              <img
                src={advantage.image}
                alt={advantage.title}
                className="advantages__image"
              />
              <h3 className="advantages__subtitle" itemProp="description">
                {advantage.title}
              </h3>
              <p className="advantages__text">{advantage.description}</p>
            </div>

            {index < advantagesData.length - 1 && (
              <div className="advantages__separator"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
