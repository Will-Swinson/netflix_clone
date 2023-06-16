import { useState, useEffect, useContext, createContext } from "react";

// Create a context
const MovieContext = createContext();

// Custom Hooks to use context
export function useMovies() {
  return useContext(MovieContext);
}
// Create a provider
export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;
