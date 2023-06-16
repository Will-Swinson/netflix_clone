import React, { useState, useEffect } from "react";
import { getAllMovieAndShows } from "./components/getMovieData.jsx";
import { useMovies } from "./context/MovieProvider.jsx";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rows from "./components/Rows";
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
      <Header />
      <Hero />
      <Rows />
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
