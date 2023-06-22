import app from "./middleware/middleware.js";
import dotenv from "dotenv";
import postgres from "postgres";
import axios from "axios";

dotenv.config();

console.log(process.env.DATABASE_URL, process.env.PORT);

export const sql = postgres(process.env.DATABASE_URL);

console.log(process.env.API_KEY);

const PORT = process.env.PORT || 5000;

// Insert data into database

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
