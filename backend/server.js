import app from "./middleware/middleware.js";
import dotenv from "dotenv";
import postgres from "postgres";
import axios from "axios";

dotenv.config();

export const sql = postgres(process.env.DATABASE_URL);

const PORT = process.env.PORT || 5000;

// Insert data into database

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
