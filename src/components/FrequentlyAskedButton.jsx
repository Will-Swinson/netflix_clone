import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function FrequentlyAskedButton() {
  return (
    <div className="flex flex-col items-start justify-center w-[850px] h-full mx-auto">
      <h2 className="w-full mt-20 text-2xl font-bold ">
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <div className="flex items-center justify-center w-full mx-auto h-1/2">
        <input
          id="inputSignup"
          type="text"
          className="w-[1000px] placeholder-white h-16 px-2 py-4 mr-2 bg-gray-600 border-2 border-white rounded opacity-80 placeholder-move-up transition-transform duration-1000"
          placeholder="Email address"
        ></input>
        <button className="w-[500px] flex justify-center items-center rounded h-16 text-2xl font-bold bg-red-600 mr-10">
          Get Started
          <IoIosArrowForward className="mt-1" size={25} />
        </button>
      </div>
    </div>
  );
}
