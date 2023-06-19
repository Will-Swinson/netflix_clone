import { React, useState } from "react";
import Modal from "react-modal";
import ModalContent from "./ModalContent";
import { IoMdInformationCircleOutline } from "react-icons/io";

function MoreInfoButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="flex bg-gray-600 text-white bg-opacity-70 px-4 py-2 rounded font-bold w-40 h-12 items-center justify-center text-lg"
      >
        <IoMdInformationCircleOutline className="mr-2" />
        <span className="opacity-100">More Info</span>
      </button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
      >
        <div className="bg-[#141414] p-8 rounded-lg w-5/12 h-5/6 text-white">
          <ModalContent closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
}

export default MoreInfoButton;
