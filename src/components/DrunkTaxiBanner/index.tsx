import { FC } from "react";
import "./style.css";

const DrunkTaxiBanner: FC = () => {
  return (
    <div className="banner-container">
     
      <img
        src="https://static.tildacdn.info/tild6165-3963-4265-b732-626539323032/zyro-image.png"
        alt="Логотип компании"
        className="background-image"
        itemProp="logo"
      />

      
      <div className="content-overlay">
        <div className="icon-wrapper">
          <img
            src="src/assets/img/Taxi/noroot.jpg.webp"
            alt="Такси Иконка"
            className="icon"
          />
        </div>
        <div className="text-content">
          <h1 className="banner-title">Пьяное Такси № 1</h1>
          <p className="banner-subtext">Трезвый водитель 24/7</p>
          <p className="banner-subtext">По городу Бишкек от 700 сом</p>
          <p className="banner-subtext">По городу Чолпон-Ата от 700 сом</p>
          <p className="banner-subtext">Оперативное реагирование на вызовы!</p>
        </div>
      </div>
    </div>
  );
};

export default DrunkTaxiBanner;
