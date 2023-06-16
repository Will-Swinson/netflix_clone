import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <div className="bg-black fixed bg-opacity-90 z-10 ">
      <div className="flex w-screen h-20 justify-between items-center text-white text-lg">
        <div className="flex">
          <img
            className="w-36 h-10 ml-12"
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
            alt="netflix-logo"
          />
          <ul className="flex items-center ml-10">
            <li className="ml-4">Home</li>
            <li className="ml-4">TV Shows</li>
            <li className="ml-4">Movies</li>
            <li className="ml-4">New & Popular</li>
            <li className="ml-4">My List</li>
            <li className="ml-4">Browse by Languages</li>
          </ul>
        </div>
        <div className="flex items-center">
          <AiOutlineSearch />
          <ul className="flex items-center">
            <li className="ml-4">Kids</li>
            <li className="ml-4">DVD</li>
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <img
            className="w-10 h-10 ml-4 mr-12"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
