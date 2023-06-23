import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useMovies } from "../context/MovieProvider.jsx";
import { Link } from "react-router-dom";
import DefaultDropdown from "./DefaultDropdown.jsx";

function Header() {
  const { handleGetList } = useMovies();
  const [show, setShow] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setShow(window.innerWidth);
    });
  }, [window.innerWidth]);

  return (
    <div className="fixed top-0 z-10 w-screen bg-black ">
      <div className="flex items-center justify-between w-full h-20 text-lg text-white">
        <img
          className="w-10 h-4 ml-6 flex-2 md:w-12 xl:h-6 xl:w-32"
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
          alt="netflix-logo"
        />
        {show < 665 ? (
          <div className="flex items-center justify-start w-full h-full ml-10">
            <DefaultDropdown />
          </div>
        ) : (
          <ul className="flex w-full text-[8px] sm:text-[8px] md:text-[12px] font-semibold justify-around ml-6 flex-1 xl:text-[16px]">
            <Link to="/home" className="">
              Home
            </Link>
            <Link to="/tv-shows" className="">
              TV Shows
            </Link>
            <Link to="/movies" className="">
              Movies
            </Link>
            <Link to="/new" className="">
              New & Popular
            </Link>
            <Link to="/my-list" onClick={handleGetList}>
              My List
            </Link>
            <Link to="/language" className="f">
              Browse by Languages
            </Link>
          </ul>
        )}
        <div className="flex items-center justify-end flex-2 ">
          <AiOutlineSearch className="w-6 xl:w-10 xl:h-6" />
          <ul className="flex text-[10px] md:text-[14px] xl:text-[16px]">
            <li className="ml-2 ">Kids</li>
            <li className="ml-2 ">DVD</li>
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 ml-2 md:w-6 xl:w-[25px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <img
            className="w-6 ml-2 mr-4 md:w-8 xl:w-10 xl:mr-6"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
