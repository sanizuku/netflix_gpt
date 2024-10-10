import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const { movieName, movieResult } = useSelector((store) => store.gpt);
  if (!movieName) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        <MovieList title={movieName} movies={movieResult} />
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
