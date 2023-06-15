import React from "react";
import "./App.css";

function Hero() {
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
            Play
          </button>
          <button className="flex bg-gray-600 text-white bg-opacity-70 px-4 py-2 rounded font-bold w-40 h-12 items-center justify-center text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2 opacity-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <span className="opacity-100">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
