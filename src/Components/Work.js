import React, { useState } from "react";
import Modal from "react-modal";
import Fasad from "../Assets/fasad.jpg";
import VishkaOne from "../Assets/vishka-tur-1.jpg";
import VishkaTwo from "../Assets/vishka-tur-3.jpg";
import VishkaThree from "../Assets/vishka-tur-2.jpg";
Modal.setAppElement("#root");

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const workInfoData = [
    {
      image: Fasad,
      title: "Фасадные леса",
      text: "Размеры: высота 2 м",
      description:
        "Длина 3 м, ширина 1 м. Эти леса предназначены для работы на фасадах зданий.",
    },
    {
      image: VishkaOne,
      title: "Вышка-тура 0.7x1.6 м",
      text: "Размеры: 0.7 м на 1.6 м.",
      description:
        "Высота начинается от 2.7 м и может достигать 21 м. Подходит для различных строительных работ.",
    },
    {
      image: VishkaTwo,
      title: "Вышка-тура 2.0x2.0 м",
      text: "Размеры: 1.2 м на 2.0 м.",
      description:
        "Высота начинается от 2.7 м и может достигать 21 м. Отлично подходит для более высоких конструкций.",
    },
    {
      image: VishkaThree,
      title: "Вышка-тура 2.0x2.0 м",
      text: "Размеры: 2.0 м на 2.0 м.",
      description:
        "Высота начинается от 2.7 м и может достигать 21 м. Идеально для более сложных и высоких строительных проектов.",
    },
  ];

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

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
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={index}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <button
              className="secondary-button"
              onClick={() => openModal(data)}
            >
              Подробнее
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Информация о работе"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedWork && (
          <div className="modal-content">
            <div className="modal-image">
              <img src={selectedWork.image} alt={selectedWork.title} />
            </div>

            <div className="modal-info">
              <h2>{selectedWork.title}</h2>
              <p>{selectedWork.text}</p>
              <p>{selectedWork.description}</p>
              <div className="modal-buttons">
                <button onClick={closeModal}>Закрыть</button>
                <a href="tel:87775455504">Позвонить</a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
с
export default Work;
