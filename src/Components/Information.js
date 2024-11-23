import React from "react";

const Information = () => {
  const informationData = [
    {
      title: "Вышки тура ВСП 250 ЕВРО",
      country: "Россия",
      height: "до 22м",
      section: "1,2м",
      load: "до 250кг",
      width: "0,8 х 1,7м., 1,2 x 2 м., 2 x 2 м.",
    },
  ];

  return (
    <div className="information-page-wrapper" id="contact">   
      {informationData.map((info, index) => (
        <ul key={index} className="info-list">
        <h1 className="primary-heading">{info.title}</h1>
          <li className="information-text">Производственная максимальная высота: {info.height}</li>
          <li className="information-text">Шаг секции нагрузки: {info.section}</li>
          <li className="information-text">Рабочая площадка: {info.width}</li>
          <li className="information-text">Максимальная нагрузка: {info.load}</li>
          <li className="information-text">Страна производства: {info.country}</li>
        </ul>
      ))}
    </div>
  );
};

export default Information;
