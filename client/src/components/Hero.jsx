import React, { useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useMovies } from "../context/MovieProvider.jsx";
import MoreInfoButton from "./MoreInfo.jsx";
import Modal from "react-modal";
import ModalContent from "./ModalContent";
import HeroInfoButton from "./HeroInfoButton.jsx";
import ReactPlayer from "react-player";
import MuteButton from "./MuteButton.jsx";
import { RiVolumeMuteLine, RiVolumeUpLine } from "react-icons/ri";
import { move } from "formik";

function Hero() {
  const { movies, isMuted, handleMute } = useMovies();
  const blackMirror = movies[0];
  const [heroLink, setHeroLink] = useState("");

  useEffect(() => {
    const filteredMovies = movies.filter((movie) => movie.type !== 6);
    console.log(filteredMovies);
    const setId = setInterval(() => {
      setHeroLink(
        filteredMovies[Math.floor(Math.random() * movies.length)]?.video_key
      );
    }, 15000);

    if (setId) {
      return () => clearInterval(setId);
    }
  }, [heroLink]);

  return (
    <div className="relative w-screen">
      <div className="w-full h-[1000px]">
        <ReactPlayer
          url={
            heroLink === ""
              ? `https://youtu.be/KydqdKKyGEk`
              : `https://www.youtube.com/watch?v=${heroLink}`
          }
          width="100%"
          height="100%"
          controls={false}
          playing={true}
          muted={isMuted}
          style={{
            objectFit: "cover",
            left: 0,
            top: 0,
            right: 0,
            marginTop: "80px",
          }}
          // light={true}
        />
      </div>

      <div className="absolute flex-col items-center ml-12 bottom-10">
        <div className="flex">
          <div className="flex items-center justify-center w-full h-full">
            <button className="flex items-center justify-center w-32 h-12 px-4 py-2 mr-2 text-xl font-bold text-black bg-white rounded">
              <BsFillPlayFill className="text-5xl" />
              Play
            </button>

            <HeroInfoButton movie={blackMirror} />
            <div>
              <button
                onClick={handleMute}
                className="flex items-center justify-center w-32 h-12 mb-2 font-sans text-xl font-bold text-white top-80 right-2"
              >
                {!isMuted ? (
                  <RiVolumeUpLine size={35} />
                ) : (
                  <RiVolumeMuteLine className="text-4xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
