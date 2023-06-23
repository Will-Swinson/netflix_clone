import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BsFillPlayFill } from "react-icons/bs";
import PlayVideo from "./Video";
import { useMovies } from "../context/MovieProvider";

function PlayButton() {
  return (
    <div>
      <button className="absolute flex items-center justify-center h-12 px-4 py-2 mb-2 font-sans text-xl font-bold text-black bg-white rounded w- top-80 left-4 hover:bg-netflix-red hover:text-white hover:border-2">
        <BsFillPlayFill className="text-5xl " />
        Play
      </button>
    </div>
  );
}

export default PlayButton;
