import React from "react";
import { BsPlusLg } from "react-icons/bs";
export default function FrequentlyAsked({
  isDropped,
  onDropDown,
  children,
  title,
  id,
}) {
  return (
    <>
      <div
        id={"dropdown" + id}
        className="flex justify-between items-center w-[1200px] h-[100px] mx-auto bg-gray-500 hover:border-2 hover:border-white cursor-pointer hover:bg-gray-600 mt-4"
        onClick={() => onDropDown(id)}
      >
        <h2 className="text-3xl ml-14 ">{title}</h2>
        <BsPlusLg className="w-10 h-10 mr-10 " />
      </div>
      {isDropped && (
        <div className="flex flex-col justify-center items-center w-[1200px] h-[200px] mx-auto bg-gray-500 border-t-2 border-black font-bold text-xl ">
          {children}
        </div>
      )}
    </>
  );
}
