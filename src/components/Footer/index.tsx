import React from "react";
import "./style.css";

const MobileFooter: React.FC = () => {
  return (
    <div className="mobile-footer">
      <img
        src="src/assets/img/footer/img1.png"
        alt="Tilda Logo"
        className="footer-logo"
      />
      <p className="footer-text">
        This site was made on Tilda — a website builder that helps to create a
        website without any code
      </p>
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
