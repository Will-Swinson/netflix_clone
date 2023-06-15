import { useEffect } from "react";
import { getAllMovieAndShows } from "./components/getMovieData.jsx";
function App() {
  useEffect(() => {
    // Fetch data from API
    getAllMovieAndShows().then((data) => {
      console.log(data);
    });
  }, []);

  return <></>;
}

export default App;
