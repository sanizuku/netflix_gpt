import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, name }) => {
  if (!movies) return;

  return (
    <div className="p-6 md:h-auto relative">
      <h1 className="text-xl text-white mb-2">{title}</h1>
      <div className=" flex overflow-x-scroll ">
        <div className="flex flex-row ">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={name}
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
