import app from "./middleware/middleware.js";
import dotenv from "dotenv";
import postgres from "postgres";
import axios from "axios";

dotenv.config({ path: "../.env" });

export const sql = postgres(process.env.DATABASE_URL);

const PORT = process.env.PORT || 5000;

// Insert data into database

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

// Functions for fetching data

export async function getPopularMovies() {
  const result = await axios.get(requestsMovies.requestPopularMovies);
  return result.data.results;
}

export async function getTopRatedMovies() {
  const result = await axios.get(requestsMovies.requestTopRatedMovies);
  return result.data.results;
}

export async function getUpcomingMovies() {
  const result = await axios.get(requestsMovies.requestUpcomingMovies);
  return result.data.results;
}

export async function getTrendingMovies() {
  const result = await axios.get(requestsMovies.requestTrendingMovies);
  return result.data.results;
}

export async function getHorrorMovies() {
  const result = await axios.get(requestsMovies.requestHorrorMovies);
  return result.data.results;
}

// MOVIE QUERIES
app.get("/api/movies/set", async (req, res) => {
  try {

    const result = await axios.get(requestsMovies.requestUpcomingMovies);

    console.log("result", result.data.results);
    const movieData = result.data.results.map((movie) => {
      return {
        adult: movie.adult,
        backdrop_path: movie.backdrop_path,
        genre_ids: movie.genre_ids,
        id: movie.id,
        original_language: movie.original_language,
        original_title: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        title: movie.title,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
      };
    });

    for (const movie of movieData) {
      // Insert data into database
      await sql`
    INSERT INTO api_data (
      adult,
      backdrop_path,
        genre_ids,
        id,
        type,
        title,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
      vote_average,
      vote_count
      ) VALUES (
        ${movie.adult},
      ${movie.backdrop_path},
      ${movie.genre_ids},
      ${movie.id},
      ${3},

      ${movie.title},
      ${movie.original_language},
      ${movie.original_title},
      ${movie.overview},
      ${movie.popularity},
      ${movie.poster_path},
      ${movie.release_date},
      ${movie.vote_average},
      ${movie.vote_count}
      ) ON CONFLICT (id) DO NOTHING RETURNING *;`;
    }

    res.status(200).json({ status: "success", data: movieData });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
