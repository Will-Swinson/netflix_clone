import React, { useState, useEffect } from "react";
import {
  getAllMovieAndShows,
  getPopularMovies,
  getTopRatedMovies,
} from "./components/getMovieData.jsx";
import { useMovies } from "./context/MovieProvider.jsx";
import Header from "./Header";
import Hero from "./Hero";
import Movies from "./components/Movies.jsx";
import "./App.css";

function App() {
  const { setMovies } = useMovies();

  useEffect(() => {
    // Fetch data from API
    getAllMovieAndShows().then((data) => {
      setMovies(data);
    });

    getTopRatedMovies().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Movies id={1} title={"Popular"} />
      <Movies id={3} title={"Top Rated"} />
      <Movies id={2} title={"Upcoming"} />
      <Movies id={4} title={"Trending"} />
      <Movies id={5} title={"Horror"} />
      <Movies id={6} title={"Trending Shows"} />
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
