import React, { useState } from "react";
import Modal from "react-modal";
import fasad from "../Assets/fasad.webp";
import VishkaOne from "../Assets/0.7-1.6.webp";
import VishkaTwo from "../Assets/1.2-2.0.jpg";
import VishkaThree from "../Assets/2-2.jpg";
Modal.setAppElement("#root");

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const workInfoData = [
    {
      image: VishkaOne,
      title: "Вышка-тура 0.7x1.6 м",
      text: "Рабочая площадка: 0.7 x 1.6 м",
      description: "Производство: Россия",
      minHeight: "2.8 м",
      maxHeight: "7.6 м",
      maxLoad: "250 кг",
    },
    {
      image: VishkaTwo,
      title: "Вышка-тура 1.2x2.0 м",
      text: "Рабочая площадка: 1.2 x 2.0 м",
      description: "Производство: Россия",
      minHeight: "2.8 м",
      maxHeight: "18.5 м",
      maxLoad: "250 кг",
    },
    {
      image: VishkaThree,
      title: "Вышка-тура 2.0x2.0 м",
      text: "Рабочая площадка: 2.0 x 2.0 м",
      description: "Производство: Россия",
      minHeight: "2.8 м",
      maxHeight: "21 м",
      maxLoad: "250 кг",
    },
    {
      image: fasad,
      title: "Фасадные леса",
      text: "Максимальная высота: 40 м",
      description: "Производство: Россия",
      tierHeight: "2м", 
      length: "3м; 2,5м; 2м", 
      width: "1 м", 
      metalThickness: "1,5 мм", 
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
              <ul>
                {selectedWork.minHeight && (
                  <>
                    <li>{selectedWork.text}</li>
                    <li>{selectedWork.description}</li>
                    <li>Минимальная высота: {selectedWork.minHeight}</li>
                    <li>Максимальная высота: {selectedWork.maxHeight}</li>
                    <li>Нагрузка: {selectedWork.maxLoad}</li>
                  </>
                )}

                {selectedWork.tierHeight && (
                  <>
                    <li>{selectedWork.description}</li>
                    <li>Высота яруса: {selectedWork.tierHeight}</li>
                    <li>Длина: {selectedWork.length}</li>
                    <li>Ширина: {selectedWork.width}</li>
                    <li>Толщина металла: {selectedWork.metalThickness}</li>
                  </>
                )}
              </ul>
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

export default Work;
