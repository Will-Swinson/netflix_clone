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
    <div className="relative flex flex-col w-full h-full">
      <div className="relative">
        <img
          className="block w-full rounded-sm h-96"
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <button className="absolute top-0 right-0 mr-2" onClick={closeModal}>
          <AiFillCloseCircle className="text-4xl text-[#141414] " />
        </button>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#141414]  to-transparent" />
        <h2 className="absolute mt-2 ml-4 font-sans text-3xl font-medium top-60">
          {movie?.title || movie.name}
        </h2>
        <div className="">
          <button className="absolute flex items-center justify-center w-32 h-12 px-4 py-2 mb-2 font-sans text-xl font-bold text-black bg-white rounded top-80 left-4">
            <BsFillPlayFill className="text-5xl" />
            Play
          </button>
          {/* Add to list button at some point */}
          {/* <div class="absolute top-80 left-32 w-8 h-8 rounded-full border border-gray-500"></div> */}
          <AddToList movie={movie} />
          <button className="absolute flex items-center justify-center w-10 h-12 mb-2 font-sans text-xl font-bold text-white top-80 left-60">
            <BsHandThumbsUp className="text-4xl" />
          </button>
          <button className="absolute flex items-center justify-center w-32 h-12 mb-2 font-sans text-xl font-bold text-white top-80 right-2">
            <RiVolumeMuteLine className="text-4xl" />
          </button>
        </div>
      </div>
      <div className="flex items-center p-5 ml-2 space-x-2">
        <div className="mr-2 font-sans font-bold text-green-400">
          {randomNumber}% Match
        </div>
        {releaseYear}
        <MdOutlineHighQuality className="font-sans text-2xl" />
        <FaAudioDescription className="font-sans text-xl" />
        <LuSubtitles className="font-sans text-lg" />
      </div>
      <div className="flex flex-row">
        <div className="ml-8 w-96">{movie.overview}</div>
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
