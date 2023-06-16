import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrCircleInformation } from "react-icons/gr";
import "./App.css";
import { useMovies } from "../context/MovieProvider.jsx";

function Hero() {
  const { movies } = useMovies();
  console.log(movies);
  return (
    <div className="relative">
      <img
        className="bg-cover w-full h-full "
        src="https://occ-0-990-987.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdxe7WGvxZ9qiVK1F6MMMkXi1glz9UjxmiihY4L7JMqAsHlDr2QbykjcwPcg42rhUlunOubqYlNkuG6VeN-6CclHzv_bREWQQ69Y.webp?r=bc1"
        alt="hero-static"
      />

      <div className="absolute flex-col top-2/3  ml-12 items-center">
        <div className="flex">
          <p>Description Movie Stuff</p>
        </div>
        <div className="flex">
          <button className="mr-2 flex bg-white text-black px-4 py-2 rounded font-bold w-32 h-12 items-center justify-center text-xl">
            <BsFillPlayFill />
            Play
          </button>
          <button className="flex bg-gray-600 text-white bg-opacity-70 px-4 py-2 rounded font-bold w-40 h-12 items-center justify-center text-lg">
            <GrCircleInformation className="mr-2" />
            <span className="opacity-100">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
