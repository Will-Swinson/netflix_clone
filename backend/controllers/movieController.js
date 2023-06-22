import { sql } from "../server.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await sql`SELECT * FROM api_data;`;

    res.status(200).json({ status: "success", movies });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err });
  }
};
