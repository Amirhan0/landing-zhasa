import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Есть вопросы?</h1>
      <h1 className="primary-heading">Мы готовы помочь</h1>
      <div className="contact-whatsapp">
        <a href="tel:87775455504" className="secondary-button" target="_blank" rel="noopener noreferrer">
          Позвонить сейчас <FiArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Contact;
