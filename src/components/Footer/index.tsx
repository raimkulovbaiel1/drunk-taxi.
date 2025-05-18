import React from "react";
import "./style.css";
//import footerLogo from "../../assets/img/footer/footer-logo.webp";

const MobileFooter: React.FC = () => {
  return (
    <div className="mobile-footer">
      <img src="src/assets/img/footer/footer-logo.webp" alt="footerLogo" className="footer-logo" />
      <p className="footer-text">Счатливого пути!</p>
    </div>
  );
};

export default MobileFooter;
