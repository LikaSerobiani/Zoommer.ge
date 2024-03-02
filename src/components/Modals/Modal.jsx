/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import CloseIcon from "../icons/CloseIcon";
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
    <section
      className="modal z-50 fixed inset-0 overflow-y-auto"
      onClick={handleBackgroundClick}
    >
      <article className="modal-content relative bg-white mx-auto my-8 p-6 rounded-md">
        <div className="flex justify-end">
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
