import React from "react";
import Fasad from "../Assets/fasad.jpg";
import VishkaOne from "../Assets/vishka-tur-1.jpg";
import VishkaTwo from "../Assets/vishka-tur-3.jpg";
import VishkaThree from "../Assets/vishka-tur-2.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: Fasad,
      title: "Фасадные леса",
      text: "Размеры: высота 2 м, длина 3 м, ширина 1 м. Эти леса предназначены для работы на фасадах зданий.",
    },
    {
      image: VishkaOne,
      title: "Вышка-тура 0.7x1.6 м",
      text: "Размеры: 0.7 м на 1.6 м. Высота начинается от 2.7 м и может достигать 21 м. Подходит для различных строительных работ.",
    },
    {
      image: VishkaTwo,
      title: "Вышка-тура 2.0x2.0 м",
      text: "Размеры: 1.2 м на 2.0 м. Высота начинается от 2.7 м и может достигать 21 м. Отлично подходит для более высоких конструкций.",
    },
    {
      image: VishkaThree,
      title: "Вышка-тура 2.0x2.0 м",
      text: "Размеры: 2.0 м на 2.0 м. Высота начинается от 2.7 м и может достигать 21 м. Идеально для более сложных и высоких строительных проектов.",
    },
  ];
  return (
    <div className="work-section-wrapper" id="catalog">
      <div className="work-section-top">
        <p className="primary-subheading">Каталог</p>
        <h1 className="primary-heading">Как это работает</h1>
        <p className="primary-text">
          Мы предлагаем разнообразные строительные решения, от фасадных лесов до
          вышек-тур для разных задач и высот.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
