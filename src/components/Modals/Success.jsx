/* eslint-disable react/prop-types */
import Modal from "./Modal";
import Button from "../button/Index";
import SuccessIcon from "../icons/SuccessIcon";

export default function Success({ title, showModal, handleClose }) {
  return (
    <Modal isModalOpen={showModal} onClose={handleClose}>
      <div>
        <div className="flex justify-center items-center">
          <SuccessIcon />
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
