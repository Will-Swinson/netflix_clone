import { sql } from "../server.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Get environment variables
dotenv.config();

// get all movies in users list
export const getMyList = async (req, res) => {
  try {
    // get token from header
    const token = req.headers.authorization.split(" ")[1];
    // if token doesnt exist, return error
    if (!token) throw new Error("No Session Found");
    // if token exists, get user id from token
    const { id: userListId } = jwt.verify(token, process.env.JWT_SECRET);
    // query database for users list
    const myList =
      await sql`SELECT * FROM mylist WHERE user_id = ${userListId}`;
    // return users list
    res.status(200).json({ status: "success", myList });
  } catch (err) {
    // Catches and returns error
    res.status(500).json({ err: err.message });
  }
};

export const addToList = async (req, res) => {
  try {
    // get token from header
    const token = req.headers.authorization.split(" ")[1];
    // if token doesnt exist, return error
    if (!token) throw new Error("No Session Found");
    // if token exists, get user id from token
    const { id: userListId } = jwt.verify(token, process.env.JWT_SECRET);
    // get movie id from req.body
    const { movieId } = req.body;
    // query database to check if movie exists in users list
    const movieExists =
      await sql`SELECT * FROM mylist WHERE user_id = ${userListId} AND movie_id = ${movieId}`;
    // if movie exists, return error
    if (movieExists) throw new Error("Movie already exists in list");
    // if movie doesnt exist, add movie to users list
    const newList =
      await sql`INSERT INTO mylist (created_at, user_id, movie_id) VALUES (${Date.now()}, ${userListId}, ${movieId})`;
    // return users list
    res.status(200).json({ status: "success", newList });
  } catch (err) {
    // Catches and returns error
    res.status(500).json({ err: err.message });
  }
};

export const removeFromList = async (req, res) => {
  try {
    // get token from header
    const token = req.headers.authorization.split(" ")[1];
    // if token doesnt exist, return error
    if (!token) throw new Error("No Session Found");
    // if token exists, get user id from token
    const { id: userListId } = jwt.verify(token, process.env.JWT_SECRET);
    // get movie id from req.body
    const { movieId } = req.body;
    // query database to check if movie exists in users list
    const movieExists =
      await sql`SELECT * FROM mylist WHERE user_id = ${userListId} AND movie_id = ${movieId}`;
    // if movie exists, delete movie from users list
    if (movieExists) {
      const newList =
        await sql`DELETE FROM mylist WHERE user_id = ${userListId} AND movie_id = ${movieId}`;
      // return users list
      res.status(200).json({ status: "success", newList });
    } else {
      throw new Error("Movie does not exist in list");
    }
  } catch (err) {
    // Catches and returns error
    res.status(500).json({ err: err.message });
  }
};
