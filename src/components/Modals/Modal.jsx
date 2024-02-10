/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import CloseIcon from "../Icons/CloseIcon";
import "../../styles/modal.css";

const Modal = ({ isModalOpen, children, onClose }) => {
  if (isModalOpen !== true) {
    return null;
  }

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <section className="modal" onClick={handleBackgroundClick}>
      <article className="modal-content">
        <div className="flex w-100 justify-end">
          <div className="cursor-pointer" onClick={onClose}>
            <CloseIcon />
          </div>
        </div>
        <div className="w-100 h-100">{children}</div>
      </article>
    </section>
  );
};

export default Modal;
