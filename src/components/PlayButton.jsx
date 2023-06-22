import React, { useState } from "react";
import ReactPlayer from "react-player";
import { BsFillPlayFill } from "react-icons/bs";
import PlayVideo from "./Video";
import { useMovies } from "../context/MovieProvider";

function PlayButton() {
  return (
    <div>
      <button className="absolute top-80 left-4 mb-2 flex bg-white text-black px-4 py-2 rounded font-bold w-32 h-12 items-center justify-center text-xl font-sans">
        <BsFillPlayFill className="text-5xl" />
        Play
      </button>
    </div>
  );
}

export default PlayButton;
