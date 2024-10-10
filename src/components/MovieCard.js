import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { clickDescription } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ movieid, posterPath }) => {
  const dispatch = useDispatch();

  if (!posterPath) return null;

  return (
    <div className="w-40 pr-4">
      <img className="" alt="Movie card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
