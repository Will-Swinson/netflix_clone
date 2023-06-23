import { React, useState } from "react";
import ReactModal from "react-modal";
import ModalContent from "./ModalContent";

import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { useMovies } from "../context/MovieProvider.jsx";

function HeroInfoButton({ movie }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { movies } = useMovies();
  const blackMirror = movies[0];

  const openModal = () => {
    setModalIsOpen(true);
    console.log(movie.title);
    console.log("rando", movie);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="flex bg-gray-600 text-white bg-opacity-70 px-4 py-2 rounded
           w-42 h-12 items-center justify-center text-lg"
      >
        <IoMdInformationCircleOutline className="text-4xl mr-2" />
        <span className="opacity-100 font-bold">More Info</span>
      </button>
      <ReactModal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
        className="p-0 flex bg-[#141414] rounded-lg  h-5/6  text-white overflow-auto justify-center "
        contentClassName="flex flex-col h-full"
      >
        <div>
          <ModalContent closeModal={closeModal} movie={movie} />
        </div>
      </ReactModal>
    </div>
  );
}

export default HeroInfoButton;
