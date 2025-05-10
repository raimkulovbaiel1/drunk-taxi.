import React from "react";
import "./style.css";

const MobileFooter: React.FC = () => {
  return (
    <div className="mobile-footer">
      <img
        src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjgxZjhjOGJlNDQ4ODE5MTg2NTM4YTdkMDFkNmQzNmM6ZmlsZV8wMDAwMDAwMDQ4MzQ2MjBhODIyMGJhMjA0MTJiNjg5MSIsInRzIjoiNDg1MjQ5IiwicCI6InB5aSIsInNpZyI6IjBkNDAzNjY0YmYzZmQzMmE5MWUxMjExM2M5MjQ2NWEzZTM0YTI5NWNhMGU1Mjg2ZTQzMmQ4ZDAxMWRiNTEwZDUiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="
        alt="Tilda Logo"
        className="footer-logo"
      />
      <p className="footer-text">
       Счатливого пути!
      </p>
    </div>
  );
};

export default MobileFooter;
