import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useMovies } from "../context/MovieProvider.jsx";
import { BsFillPlayFill } from "react-icons/bs";
import { FaAudioDescription } from "react-icons/fa";
import { LuSubtitles } from "react-icons/lu";
import { MdOutlineHighQuality } from "react-icons/md";

function ModalContent({ closeModal, movie }) {
  const { movies } = useMovies();

  return (
    <div className="flex flex-col">
      <h2>{movie.title}</h2>
      <button onClick={closeModal}>
        <AiFillCloseCircle />
      </button>
      <div className="relative">
        <img
          className="w-100% h-auto block rounded-sm"
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <button className="mr-2 flex bg-white text-black px-4 py-2 rounded font-bold w-32 h-12 items-center justify-center text-xl">
          <BsFillPlayFill />
          Play
        </button>
        <FaAudioDescription />
        <LuSubtitles />
        <MdOutlineHighQuality />
      </div>
    </div>
  );
}

export default ModalContent;
