import { sql } from "../server.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { move } from "formik";

// Get environment variables
dotenv.config();

// get all movies in users list
export const getMyList = async (req, res) => {
  try {
    // get token from header
    const token = req.headers.authorization.split(" ")[1];

    console.log(token);
    // if token doesnt exist, return error
    if (!token) throw new Error("No Session Found");
    // if token exists, get user id from token
    const { id: userId } = jwt.verify(token, process.env.JWT_SECRET);

    console.log(userId);
    // query database for users list
    const [{ id: currUsersListId }] =
      await sql`SELECT id FROM my_list WHERE user_id = ${userId}`;

    console.log(currUsersListId);

    const currUsersMoviesList =
      await sql`SELECT api_data_id FROM my_list_movies WHERE my_list_id = ${currUsersListId};`;

    console.log(currUsersMoviesList);
    // return users list
    res.status(200).json({ status: "success", currUsersMoviesList });
  } catch (err) {
    // Catches and returns error
    res.status(500).json({ err: err.message });
  }
};

export const addToList = async (req, res) => {
  try {
    // get token from header
    const token = req.headers.authorization.split(" ")[1];

    console.log(token);
    // if token doesnt exist, return error
    if (!token) throw new Error("No Session Found");
    // if token exists, get user id from token
    const { id: userId } = jwt.verify(token, process.env.JWT_SECRET);
    // get movie id from req.body
    const { movieId } = req.body;
    console.log(movieId, userId);

    // query database to check if list exists
    const [{ id: userListId }] =
      await sql`SELECT id FROM my_list WHERE user_id = ${userId};`;

    if (!userListId) throw new Error("No list found");

    // Insert into my_list_movies
    const addedMovie =
      await sql`INSERT INTO my_list_movies(my_list_id, api_data_id) VALUES (${userListId}, ${movieId}) RETURNING *;`;

    console.log(addedMovie);

    // return addedMovie list
    res.status(201).json({ status: "success", addedMovie });
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
