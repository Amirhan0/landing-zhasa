import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/aboutimage.png";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">О нас</p>
        <h1 className="primary-heading">
          Надежные строительные леса для вашего проекта
        </h1>
        <p className="primary-text">
          Мы предлагаем строительные леса, которые обеспечивают надежность и
          безопасность на каждом этапе. Высокое качество и прочность гарантируют
          успешное завершение вашего проекта.
          
        </p>
        <p className="primary-text">
          Выбирайте наши леса для уверенности и надежности в строительстве.
        </p>
        <div className="about-buttons-container">
        <a href="tel:87775455504" className="secondary-button">
            Позвонить нам
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
