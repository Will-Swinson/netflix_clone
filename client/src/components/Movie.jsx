import { useState } from "react";
import MoreInfoButton from "./MoreInfo.jsx";
import Imgix from "react-imgix";

const Movie = ({ movie, id }) => {
  const [like, setLike] = useState(false);
  const appVersion = "1.0.0";

  const fingerPrintURL = (imagePath) => {
    const fingerprintedPath = `${imagePath}?v=${appVersion}`;

    return fingerprintedPath;
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[250px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <Imgix
        className="block rounded-sm"
        src={fingerPrintURL(
          `https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`
        )}
        alt={movie?.title}
        imgixParams={{ fm: "webp" }}
        width={500}
        height={281}
      />

      <div className="absolute top-0 left-0 w-full h-full text-white rounded opacity-0 hover:bg-black/80 hover:opacity-100">
        <p className="flex items-center justify-center h-full text-xs font-bold text-center text-white whitespace-normal md:text-sm">
          {movie?.title || movie?.name}
          <p className="absolute bottom-0 right-2">
            <MoreInfoButton movie={movie} />
          </p>
        </p>
      </div>
    </div>
  );
};

export default Movie;
