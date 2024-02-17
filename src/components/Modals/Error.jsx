/* eslint-disable react/prop-types */
import Modal from "./Modal";
import Button from "../Button/Index";
import ErrorIcon from "../Icons/ErrorIcon";

export default function Error({ title, showModal, handleClose }) {
  return (
    <Modal isModalOpen={showModal} onClose={handleClose}>
      <div>
        <div className="flex justify-center items-center">
          <ErrorIcon />
        </div>
        <h2 className="text-center text-2xl font-bold mt-4 mb-12">{title}</h2>
        <div className="flex justify-center w-100">
          <Button
            children="კარგი"
            onClick={handleClose}
            className="bg-primary text-white w-full"
          />
        </div>
      </div>
    </Modal>
  );
}
