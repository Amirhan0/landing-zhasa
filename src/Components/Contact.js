import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Есть вопросы?</h1>
      <h1 className="primary-heading">Мы готовы помочь</h1>
      <div className="contact-whatsapp">
      <p className="contact-text">Если у вас появились вопросы, напишите нам на WhatsApp:</p>
        <a href="https://wa.me/77057072288" className="whatsapp-link" target="_blank" rel="noopener noreferrer">
          Написать в WhatsApp <FiArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Contact;
