import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useMovies } from "../context/MovieProvider";
export default function FrequentlyAskedButton() {
  const { formik } = useMovies();

  const hasErrorStyle = formik.errors.email
    ? "border-netflix-red text-netflix-red placeholder-netflix-red"
    : "border-gray-400";
  return (
    <div className="flex flex-col items-start justify-center w-[850px] h-full mx-auto">
      <h2 className="w-full mt-20 text-2xl font-bold ">
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <form className="flex items-start justify-center w-full mx-auto mt-8 h-1/2">
        <div className={`flex flex-col w-full ${hasErrorStyle}`}>
          <input
            id="inputSignup"
            type="text"
            className="h-16 px-2 py-4 mr-2 placeholder-white transition-transform duration-1000 bg-gray-600 border-2 border-white rounded opacity-80 placeholder-move-up"
            placeholder="Email address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.errors.email}
        </div>
        <Link to="/signup">
          <button className=" w-[300px] flex items-center justify-center h-16 mr-10 text-2xl font-bold bg-red-600 rounded ">
            Get Started
            <IoIosArrowForward className="mt-1" size={25} />
          </button>
        </Link>
      </form>
    </div>
  );
}
