import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src="/logotip.png" alt="Логотип" />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="#home">Главная</a>
          <a href="#about">О нас</a>
          <a href="#catalog">Каталог</a>
          <a href="#contact">Контакты</a>
        </div>
        <div className="footer-section-columns">
          <span>Phone: 8 777 545 55 04</span>
          <span>
            WhatsApp:{" "}
            <a
              href="https://wa.me/77057072288"
              target="_blank"
              rel="noopener noreferrer"
            >
              8 705 707 22 88
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
