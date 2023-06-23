import React from "react";
import { useMovies } from "../context/MovieProvider.jsx";
import { AiOutlinePlusCircle } from "react-icons/ai";

function AddToList({ movie }) {
  const { movies, handleAddToList } = useMovies();

  return (
    <button
      onClick={() => handleAddToList(movie.id)}
      className="absolute flex items-center justify-center w-10 h-12 mb-2 font-sans text-xl font-bold text-white top-80 left-44 hover:text-green-600 "
    >
      <AiOutlinePlusCircle
        className="text-4xl rounded-full hover:bg-black hover:bg-opacity-50"
        onClick={handleAddToList}
      />
    </button>
  );
}
export default AddToList;
