import { React, useState } from "react";
import ReactModal from "react-modal";
import ModalContent from "./ModalContent";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useMovies } from "../context/MovieProvider.jsx";

function MoreInfoButton({ movie }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { movies } = useMovies();

  const openModal = () => {
    setModalIsOpen(true);
    console.log(movie.title);
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
      <ReactModal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
        className="p-0 flex bg-[#141414] rounded-lg w-1/2 h-5/6  text-white overflow-auto justify-center "
      >
        <div>
          <ModalContent closeModal={closeModal} movie={movie} />
        </div>
      </ReactModal>
    </div>
  );
}

export default MoreInfoButton;
