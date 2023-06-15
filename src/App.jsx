import React, { useState, useEffect } from "react";
import { getAllMovieAndShows } from "./components/getMovieData.jsx";
import Header from "./header";
import Hero from "./Hero";
import Movies from "./Movies";
import "./App.css";


function App() {
  useEffect(() => {
    // Fetch data from API
    getAllMovieAndShows().then((data) => {
      console.log(data);
    });
  }, []);




  return (
    <>
      <Header />
      <Hero />
      <Movies />
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
