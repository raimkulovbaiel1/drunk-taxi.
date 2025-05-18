import { FC } from "react";
import "./style.css"; 

const DrunkTaxiBanner: FC = () => {
  return (
    <div className="banner-container">
      <img
        src="src/assets/img/Taxi/bg-3.jpg"
        alt="Логотип компании"
        className="background-image"
        itemProp="logo"
      />

      <div className="content-overlay">
        <div className="icon-wrapper">
          <img
            src="src/assets/img/Taxi/logo.jpg"
            alt="Такси Иконка"  
            className="icon"
          />
        </div>
        <div className="text-content">
          <h1 className="banner-title">Пьяное Такси</h1>
          <p className="banner-subtext">Трезвый водитель 24/7</p>
          <p className="banner-subtext">Оперативное реагирование на вызовы!</p>
          <p className="banner-subtext">По городу Бишкек от 700 сом</p>
        </div>
      </div>
    </div>
  );
};

export default DrunkTaxiBanner;
