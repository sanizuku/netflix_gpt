import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-stone-950">
        <div className="-mt-0  md:-mt-52 pl-4 md:pl-12  z-20">
          <MovieList
            title={"Now Playing"}
            name={"nowPlayingMovies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={"Trending"}
            name={"topRatedMovies"}
            movies={movies.topRatedMovies}
          />
          <MovieList
            title={"Popular"}
            name={"popularMovies"}
            movies={movies.popularMovies}
          />
          <MovieList
            title={"Upcoming Movies"}
            name={"nowUpcomingMovies"}
            movies={movies.nowUpcomingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
