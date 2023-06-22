import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useMovies } from "../context/MovieProvider.jsx";
import MoreInfoButton from "./MoreInfo.jsx";
import Modal from "react-modal";
import ModalContent from "./ModalContent";
import HeroInfoButton from "./HeroInfoButton.jsx";
function Hero() {
  const { movies } = useMovies();
  console.log("movies");
  const blackMirror = movies[0];

  return (
    <div className="relative">
      <img
        className="bg-cover w-full h-full"
        src="https://occ-0-990-987.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdxe7WGvxZ9qiVK1F6MMMkXi1glz9UjxmiihY4L7JMqAsHlDr2QbykjcwPcg42rhUlunOubqYlNkuG6VeN-6CclHzv_bREWQQ69Y.webp?r=bc1"
        alt="hero-static"
      />

      <div className="absolute flex-col top-1/3 ml-12 items-center">
        <div className="flex text-white font-medium">
          <img src="https://occ-0-990-987.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABT8ZcrWC1SNMCte2AnwcF7ZGkbJeoqwFscWFqpjyOCUQR_elVJBe2ezjXnpy2Zbl1cYeA2RnC6OX6Jm-mUHh20cP1zQheoFN8qIDEUwUZN9UQyr_KIHChIGfvDW_yj_ohJ7qkYO-kuPmCZN79vNc7mXvWNYRfsIroYu5CEb6x7Q2U3AAHRuU.webp?r=581" />
        </div>
        <div className="flex">
          <button className="mr-2 flex bg-white text-black px-4 py-2 rounded font-bold w-32 h-12 items-center justify-center text-xl">
            <BsFillPlayFill className="text-5xl" />
            Play
          </button>

          <HeroInfoButton movie={blackMirror} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
