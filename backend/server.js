import app from "./middleware/middleware.js";
import dotenv from "dotenv";
import postgres from "postgres";
import pg from "pg";

dotenv.config();

const db = new pg.Pool({
  // connectionString: process.env.DATABASE_URL,
  user: "leo",
  host: "localhost",
  database: 'movies',
  password: "Uglyg00d",
  port: "5432"
});

db.connect();


export const sql = postgres(process.env.DATABASE_URL);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
