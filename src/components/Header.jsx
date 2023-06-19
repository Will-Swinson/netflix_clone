import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <div className="fixed z-10 bg-black bg-opacity-90">
      <div className="flex items-center justify-between w-screen h-20 text-lg text-white">
        <div className="flex ">
          <img
            className="h-10 ml-6 sm:ml-12 w-28 sm:w-36"
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
            alt="netflix-logo"
          />
        </div>
        <div className="items-center justify-between hidden w-[1000px] h-full sm:flex sm:w-1/3">
          <ul className="flex items-center w-full ml-10">
            <li className="flex items-center h-full ml-4 text-xs lg:text-xl">
              Home
            </li>
            <li className="flex items-center h-full ml-4 text-xs lg:text-xl">
              TV Shows
            </li>
            <li className="flex items-center ml-4 text-xs lg:text-xl">
              Movies
            </li>
            <li className="flex items-center ml-4 text-xs lg:text-xl">
              New & Popular
            </li>
            <li className="flex items-center ml-4 text-xs lg:text-xl">
              My List
            </li>
            <li className="flex items-center ml-4 text-xs lg:text-xl">
              Browse by Languages
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <AiOutlineSearch className="w-6 h-6 ml-2 sm:ml-4" />
          <ul className="flex items-center hidden sm:flex">
            <li className="ml-2 sm:ml-4">Kids</li>
            <li className="ml-2 sm:ml-4">DVD</li>
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-2 sm:ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <img
            className="w-8 h-8 ml-2 mr-6 sm:ml-4 sm:mr-12"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
