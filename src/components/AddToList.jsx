import React from "react";
import { useMovies } from "../context/MovieProvider.jsx";
import { AiOutlinePlusCircle } from "react-icons/ai";

function AddToList({ movie }) {
  const { movies } = useMovies();
  function handleAddToList() {
    console.log("from addtolist", movie);
  }

  return (
    <button className="absolute top-80 left-44 mb-2 flex text-white font-bold w-10 h-12 items-center justify-center text-xl font-sans">
      <AiOutlinePlusCircle className="text-4xl" onClick={handleAddToList} />
    </button>
  );
}
export default AddToList;
