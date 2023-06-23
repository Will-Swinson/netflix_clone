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

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTFhM2FhYzZhYTRhNzljZmI5ZTMzMDE3YWM4OGJlMSIsInN1YiI6IjY0OGExYTg2ZDJiMjA5MDBjYTIyM2Y3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.db5tNXpuST7ql4euB9I4ezjn81JnfchBUnoo4ZIDcK0",
  },
};

app.get("/api/insert", async (req, res) => {
  try {
    // Make a query for all movie IDs
    const movieIds = await sql`SELECT id FROM api_data WHERE type < 6;`;

    console.log(movieIds);

    const movieData = [];

    // Make an API request with a loop for each movie ID
    for (const movieId of movieIds) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId.id}/videos`,
        options
      );
      movieData.push(response.data);
    }

    console.log(movieData);
    for (const movie of movieData) {
      for (const result of movie.results) {
        console.log(result.key);
        // You can use the result.key value to insert into the database or perform other operations
        const selectedMovies = await sql`
    UPDATE api_data
    SET video_key = ${result.key}
    WHERE id = ${movie.id};`;

        console.log(selectedMovies);
      }
    }

    // Insert data into the database
    res.status(200).json({ movieData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
