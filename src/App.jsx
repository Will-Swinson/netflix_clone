import React, { useState, useEffect } from "react";
import { getAllMovieAndShows } from "./utils/getMovieData.jsx";
import { useMovies } from "./context/MovieProvider.jsx";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import LandingPage from "./pages/LandingPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import MovieHomePage from "./pages/MovieHomePage.jsx";

import MyListPage from "./pages/MyListPage.jsx";

import SignUpPlanPage1 from "./pages/SignUpPlanPage1.jsx";
import SignUpPlanPage2 from "./pages/SignUpPlanPage2.jsx";
import SignUpPlanPage3 from "./pages/SignUpPlanPage3.jsx";
import SignUpPlanPage4 from "./pages/SignUpPlanPage4.jsx";
import SignUpPlanPaymentPage from "./pages/SignUpPlanPaymentPage.jsx";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import NetflixProfile from "./components/NetflixProfile.jsx";
function App() {
  const { setMovies } = useMovies();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from API
    getAllMovieAndShows().then((data) => {
      setMovies(data);
    });
  }, []);

  // Check if user is logged in
  useEffect(() => {
    const currentUser =
      sessionStorage.getItem("token") !== null
        ? JSON.parse(sessionStorage.getItem("token"))
        : sessionStorage.clear();

    if (
      !currentUser &&
      window.location.pathname !== "/signin" &&
      window.location.pathname !== "/signup" &&
      window.location.pathname !== "/signup2" &&
      window.location.pathname !== "/signup3" &&
      window.location.pathname !== "/signup4" &&
      window.location.pathname !== "/payment" &&
      window.location.pathname !== "/"
    ) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPlanPage1 />} />
        <Route path="/signup2" element={<SignUpPlanPage2 />} />
        <Route path="/signup3" element={<SignUpPlanPage3 />} />
        <Route path="/signup4" element={<SignUpPlanPage4 />} />
        <Route path="/payment" element={<SignUpPlanPaymentPage />} />
        <Route path="/home" element={<MovieHomePage />} />
        <Route path="/my-list" element={<MyListPage />} />
        <Route path="/profile-login" element={<NetflixProfile />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
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
