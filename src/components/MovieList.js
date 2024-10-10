import React, { useState } from "react";
import MovieCard from "./MovieCard";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="p-6">
      <h1 className="text-xl text-white mb-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex  ">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movieid={movie.id}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
