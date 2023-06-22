import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useMovies } from "../context/MovieProvider.jsx";
import { BsFillPlayFill } from "react-icons/bs";
import { RiVolumeMuteLine } from "react-icons/ri";
import { BsHandThumbsUp } from "react-icons/bs";
import { FaAudioDescription } from "react-icons/fa";
import { LuSubtitles } from "react-icons/lu";
import { MdOutlineHighQuality } from "react-icons/md";
import AddToList from "./AddToList.jsx";
function ModalContent({ closeModal, movie }) {
  const { movies } = useMovies();

  const releaseYear = movie.release_date.substring(0, 4);
  const randomNumber = Math.floor(Math.random() * 21) + 80;

  return (
    <div className="relative flex flex-col h-full w-full">
      <div className="relative">
        <img
          className="w-full h-96 block rounded-sm"
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <button className="absolute top-0 right-0 mr-2" onClick={closeModal}>
          <AiFillCloseCircle className="text-4xl text-[#141414] " />
        </button>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#141414]  to-transparent" />
        <h2 className="absolute top-60 text-3xl font-medium mt-2 ml-4 font-sans">
          {movie?.title || movie.name}
        </h2>
        <div className="">
          <button className="absolute top-80 left-4 mb-2 flex bg-white text-black px-4 py-2 rounded font-bold w-32 h-12 items-center justify-center text-xl font-sans">
            <BsFillPlayFill className="text-5xl" />
            Play
          </button>
          {/* Add to list button at some point */}
          {/* <div class="absolute top-80 left-32 w-8 h-8 rounded-full border border-gray-500"></div> */}
          <AddToList movie={movie} />
          <button className="absolute top-80 left-48 mb-2 flex text-white font-bold w-32 h-12 items-center justify-center text-xl font-sans">
            <BsHandThumbsUp className="text-4xl" />
          </button>
          <button className="absolute top-80 right-2 mb-2 flex text-white font-bold w-32 h-12 items-center justify-center text-xl font-sans">
            <RiVolumeMuteLine className="text-4xl" />
          </button>
        </div>
      </div>
      <div className="flex ml-2 p-5 items-center space-x-2">
        <div className="mr-2 font-bold text-green-400 font-sans">
          {randomNumber}% Match
        </div>
        {releaseYear}
        <MdOutlineHighQuality className="text-2xl font-sans" />
        <FaAudioDescription className="text-xl font-sans" />
        <LuSubtitles className="text-lg font-sans" />
      </div>
      <div className="flex flex-row">
        <div className="w-96 ml-8">{movie.overview}</div>
        <div>
          <div className="flex flex-row ml-4">
            <div className="text-gray-500 underline">Cast:</div>
            <div className="ml-2"> jay , jay, will , david, leandro </div>
          </div>
          <div className="flex flex-row ml-4">
            <div className="text-gray-500 underline">Genre:</div>
            <div className="ml-2"> spooky </div>
          </div>
          <div className="flex flex-row ml-4">
            <div className="text-gray-500 underline">This movie is:</div>
            <div className="ml-2"> bad </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
