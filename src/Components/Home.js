import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/bannerimage.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Строительные леса: надежность и безопасность на высшем уровне
          </h1>
          <p className="primary-text">
            Надежные строительные леса для вашего проекта. Прочные, безопасные и
            легкие в установке.
          </p>
          <a href="tel:87775455504" className="secondary-button">
            Позвонить сейчас <FiArrowRight />{" "}
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Object" />
        </div>
      </div>
    </div>
  );
};

export default Home;
