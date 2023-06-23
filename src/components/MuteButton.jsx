import React, { useState } from "react";
import { useMovies } from "../context/MovieProvider";
import { RiVolumeMuteLine } from "react-icons/ri";

function MuteButton() {
  const { handleMute } = useMovies();
  return (
    <div>
      <button
        onClick={handleMute}
        className="absolute top-80 right-2 mb-2 flex text-white font-bold w-32 h-12 items-center justify-center text-xl font-sans"
      >
        <RiVolumeMuteLine className="text-4xl" />
      </button>
    </div>
  );
}

export default MuteButton;
