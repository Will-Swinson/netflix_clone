import { sql } from "../server.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Get environment variables
dotenv.config();

export const createUser = async (req, res) => {
  try {
    // destrcture name, email, password from req.body
    const { name, email, password, phoneNumber } = req.body;

    // query database to check if user exists
    const userExists = await sql`SELECT * FROM users WHERE email = ${email}`;

    // if user exists, return error
    if (!userExists) throw new Error("User already exists");

    // Insert user into database
    const newUser =
      await sql`INSERT INTO users (name, email, password, phone_number) VALUES (${name}, ${email}, ${password}, ${phoneNumber})`;

    // Create users mylist
    await sql`INSERT INTO mylist (created_at, user_id) VALUES (${Date.now()}${
      newUser.id
    })`;

    // give token to user on signup
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);

    // return user and token
    res.status(201).json({
      status: "success",
      newUser,
      token,
    });
  } catch (err) {
    // Catches and returns error
    res.status(500).json({ err: err.message });
  }
};
