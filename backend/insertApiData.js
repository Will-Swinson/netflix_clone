import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

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

//  Needed Information from API
// TV information
// - Name, adult, backdrop_path, first_air_date, genre_ids, id, media_type, origin_country, original_name, overview, popularity, poster_path, vote_average, vote_count

// Movie information
// - adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count

// Extracting data from API

// TV SHOW QUERIES
app.get("/api/movies/set", async (req, res) => {
  try {
    const result = await axios.get(requestsMovies.requestPopularMovies);

    const movieData = result.data.results.map((movie) => {
      console.log(movie);
      return {
        adult: movie.adult,
        backdrop_path: movie.backdrop_path,
        genre_ids: movie.genre_ids,
        id: movie.id,
        media_type: movie.media_type,
        name: movie.name,

        // Uncomment for the TV SHOWS
        // origin_country: movie.origin_country[0],

        original_language: movie.original_language,
        original_title: movie.original_name,
        overview: movie.overview,
        popularity: movie.popularity,
        poster_path: movie.poster_path,
        release_date: movie.first_air_date || movie.release_date,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
      };
    });

    // ADD ORIGIN COUNTRY TO SQL QUERY AFTER NAME ARRAY[${movie.origin_country}],
    for (const movie of movieData) {
      // Insert data into database
      await sql`
    INSERT INTO api_data (
      adult,
      backdrop_path,
        genre_ids,
        id,
        media_type,
        type,
        name,
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
      ${movie.media_type},
      ${1},
      ${movie.name}, 
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

// MOVIE QUERIES
app.get("/api/movies/set", async (req, res) => {
  try {
    const result = await axios.get(requestsMovies.requestPopularMovies);
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
      ${1},
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
