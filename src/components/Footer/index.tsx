import React from "react";
import "./style.css";
import footerLogo from "../../assets/img/footer/img1.png";

const MobileFooter: React.FC = () => {
  return (
    <div className="mobile-footer">
      <img src={footerLogo} alt=" Logo" className="footer-logo" />
      <p className="footer-text"></p>
      <button className="footer-button">Create a website</button>
      <div className="footer-links">
        <a href="#">How to remove this block?</a>
        <a href="#">About platform</a>
        <a href="#">Submit a complaint</a>
      </div>
    </div>
  );
};

export default MobileFooter;
