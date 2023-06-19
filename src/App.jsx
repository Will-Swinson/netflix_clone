import React, { useState, useEffect } from "react";
import { getAllMovieAndShows } from "./components/getMovieData.jsx";
import { useMovies } from "./context/MovieProvider.jsx";
import Header from "./Header";
import Hero from "./Hero";
import Rows from "./components/Rows";
import "./App.css";
import NetflixProfile from "./components/NetflixProfile.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import NetflixIntro from "./components/NetflixIntro.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPlanPage2 from "./pages/SignUpPlanPage2.jsx";
import SignUpPlanPage1 from "./pages/SignUpPlanPage1.jsx";
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
      <SignUpPlanPage1 />
      {/* <SignInPage /> */}
      {/* <Header />
      <Hero />
      <Rows /> */}
      {/* <LandingPage /> */}
      {/* <NetflixProfile /> */}
      {/* <NetflixIntro /> */}
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
