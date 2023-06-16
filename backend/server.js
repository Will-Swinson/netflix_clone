import app from "./middleware/middleware.js";
import dotenv from "dotenv";
import postgres from "postgres";
import axios from "axios";

dotenv.config();

export const sql = postgres(process.env.DATABASE_URL);

const PORT = process.env.PORT || 5000;

const key = process.env.API_KEY;

// Request urls for movies
const requestsMovies = {
  requestPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTrendingMovies: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
  requestHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,

  requestTrendingShows: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`,
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
