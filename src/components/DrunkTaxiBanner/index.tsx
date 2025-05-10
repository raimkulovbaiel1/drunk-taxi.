import { FC } from "react";
import "./style.css";

const DrunkTaxiBanner: FC = () => {
  return (
    <div className="banner-container">
      <img
        src="src/assets/img/Taxi/bg.jpg"
        alt="Логотип компании"
        className="background-image"
        itemProp="logo"
      />

      <div className="content-overlay">
        <div className="icon-wrapper">
          <img
            src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjgxZjhjOGJlNDQ4ODE5MTg2NTM4YTdkMDFkNmQzNmM6ZmlsZV8wMDAwMDAwMDQ4MzQ2MjBhODIyMGJhMjA0MTJiNjg5MSIsInRzIjoiNDg1MjQ5IiwicCI6InB5aSIsInNpZyI6IjBkNDAzNjY0YmYzZmQzMmE5MWUxMjExM2M5MjQ2NWEzZTM0YTI5NWNhMGU1Mjg2ZTQzMmQ4ZDAxMWRiNTEwZDUiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="
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
