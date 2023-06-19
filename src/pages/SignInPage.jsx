import React from "react";

export default function SignInPage() {
  return (
    <div
      className="relative flex items-center justify-center h-screen overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/76c10fc9-7ccd-4fbf-bc59-f16a468921ca/4fb4af6e-d0ca-4c7f-b004-b34226727e55/IN-en-20230529-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black shadow-inner bg-opacity-60"></div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        className="absolute w-32 shadow top-3 left-3"
        alt="Logo"
      />
      <form className="z-10 p-10 text-white bg-black w-80 bg-opacity-70">
        <h3 className="text-2xl text-white capitalize ">Sign In</h3>

        <div className="relative my-5">
          <label className="absolute px-4 py-1 text-sm text-gray-200 rounded-full select-none bg-netflix-red -top-3 right-2">
            Email or phone number
          </label>
          <input
            type="text"
            className="w-full p-4 text-sm text-white bg-gray-800 border-2 rounded outline-none border-netflix-red focus:bg-gray-800"
          />
          <p className="mt-1 text-xs text-red-600"></p>
        </div>

        <div className="relative my-5">
          <label className="absolute px-4 py-1 text-sm text-gray-200 rounded-full select-none bg-netflix-red -top-3 right-2">
            Password
          </label>
          <input
            type="password"
            className="w-full p-4 text-sm text-white bg-gray-800 border-2 rounded outline-none border-netflix-red focus:bg-gray-800"
          />
          <p className="mt-1 text-xs text-red-500"></p>
        </div>

        <input
          type="submit"
          value="Sign In"
          className="w-full py-4 text-sm text-gray-200 capitalize rounded shadow-md cursor-pointer bg-netflix-red hover:bg-gray-800"
        />

        <div className="flex justify-between mt-6 text-sm text-gray-500">
          <div>
            <input type="checkbox" id="rem" />
            <label htmlFor="rem" className="ml-2">
              Remember me
            </label>
          </div>
          <a href="##">Need help?</a>
        </div>

        <p className="mt-4 text-base text-gray-600">
          New to Netflix?
          <a href="##" className="ml-1 text-white underline">
            Sign up now.
          </a>
        </p>

        <p className="mt-1 text-xs text-gray-400">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="##" className="ml-1 text-blue-700 underline">
            Learn more.
          </a>
        </p>
      </form>
      <div className="absolute text-red-500 cursor-pointer right-5 bottom-5">
        <i className="text-xl fa fa-youtube-play"></i>
        <a
          href="https://www.youtube.com/@MR.shortzed333"
          target="_blank"
          rel="noreferrer"
          className="ml-1 text-sm text-white no-underline hover:text-red-500"
        >
          Youtube
        </a>
      </div>
    </div>
  );
}
