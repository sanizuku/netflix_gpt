import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="pr-4 w-40 md:h-48 md:w-64 relative">
      <img
        className="md:h-48 md:w-64 cursor-pointer"
        alt="Movie card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
