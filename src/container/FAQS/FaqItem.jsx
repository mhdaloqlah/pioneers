import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FaqItem.css";

const FaqItem = ({ faqDetails }) => {
  const [isActive, setIsActive] = useState(false);

  const onClickIconToggle = () => {
    setIsActive(!isActive);
  };

  const { heading, detail } = faqDetails;

  return (
    <li className="faqs-list-items">
      <div className="question-container">
        <h1 className="question-text">{heading}</h1>
        <button className="button" type="button" onClick={onClickIconToggle}>
          {isActive ? (
            <FaMinus className="icon-image" />
          ) : (
            <FaPlus className="icon-image" />
          )}
        </button>
      </div>
      {isActive && <p className="answer-text">{detail}</p>}
    </li>
  );
};

export default FaqItem;
