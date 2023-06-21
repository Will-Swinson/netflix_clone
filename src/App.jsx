import React, { useState, useEffect } from "react";
import { getAllMovieAndShows } from "./utils/getMovieData.jsx";
import { useMovies } from "./context/MovieProvider.jsx";
import "tailwindcss/tailwind.css";
import LandingPage from "./pages/LandingPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import MovieHomePage from "./pages/MovieHomePage.jsx";
import SignUpPlanPage1 from "./components/SignUpPlanPage1.jsx";
import SignUpPlanPage2 from "./components/SignUpPlanPage2.jsx";
import SignUpPlanPage3 from "./components/SignUpPlanPage3.jsx";
import SignUpPlanPage4 from "./components/SignUpPlanPage4.jsx";
import SignUpPlanPaymentPage from "./components/SignUpPlanPaymentPage.jsx";

import "./App.css";
function App() {
  const { setMovies } = useMovies();

  useEffect(() => {
    // Fetch data from API
    getAllMovieAndShows().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <>
      {/* <SignUpPlanPage4 /> */}
      <SignUpPlanPaymentPage />
      {/* <SignInPage /> */}
      {/* <MovieHomePage /> */}
      {/* <LandingPage /> */}
    </>
  );
}

export default App;

{
  /* <img
  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
  alt=""
/>; */
}
