// import React, { useState } from "react";
// import { IMG_CDN_URL } from "../utils/constants";

// import VideoBackground from "./VideoBackground";

// const MovieCard = ({ posterPath, movieid }) => {
//   const [id, setId] = useState();

//   const handleClick = (e) => {
//     console.log("check1", e.target);
//     console.log("check", e);
//     setId(e.target.__reactProps$24u75jgzoux?.value);
//   };

//   if (!posterPath) return null;
//   return (
//     <div className="pr-4 w-40 md:h-48 md:w-64">
//       <img
//         onClick={handleClick}
//         className=" md:h-48 md:w-64"
//         value={movieid}
//         alt="Movie card"
//         src={IMG_CDN_URL + posterPath}
//       />
//       {id && <VideoBackground movieId={id} />}
//     </div>
//   );
// };

// export default MovieCard;
import React, { useEffect, useRef, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieCard = ({ posterPath, movieid, title }) => {
  // const [selectedId, setSelectedId] = useState(null);
  const [information, setInformation] = useState([]);
  const movies = useSelector((store) => store.movies);
  const hoverTimeoutRef = useRef(null);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // useMovieTrailer(information?.id);
  const handleClick = () => {
    // setSelectedId(movieid);
    hoverTimeoutRef.current = setTimeout(() => {
      function getMovies(type) {
        return movies[type];
      }
      const moviesData = getMovies(title);
      const info = moviesData.filter((data) => data.id == movieid);
      setInformation(info[0]);
      console.log("data", info[0]);
    }, 2000);
  };

  const handleRemove = () => {
    clearTimeout(hoverTimeoutRef.current);
    setInformation(null);
  };
  console.log(information);

  if (!posterPath) return null;

  return (
    <div className="pr-4 w-40 md:h-48 md:w-64 relative">
      <img
        className="md:h-48 md:w-64 cursor-pointer"
        alt="Movie card"
        src={IMG_CDN_URL + posterPath}
        onMouseEnter={handleClick}
        // Click to trigger the video trailer
        onMouseLeave={handleRemove}
      />
      {/* Show the trailer if the movie card is clicked */}
    </div>
    // <div className="relative p-2 w-72 h-48 shadow-lg rounded-lg overflow-visible group transition-all duration-500">
    //   // {/* Thumbnail always visible */}
    //   //{" "}
    //   <img
    //     className="rounded-lg w-full h-full object-cover"
    //     alt="thumbnail"
    //     src={IMG_CDN_URL + posterPath}
    //   />
    //   {/* Hover effect container (expands from center) */}
    //   {information && (
    //     <div className="absolute p-4 top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 group-hover:w-[350px] group-hover:h-[300px] group-hover:translate-z-[50%]  transition-all duration-3000 delay-200 ease-in-out rounded-lg shadow-2xl z-10 ">
    //       {/* Poster repeated inside the expanded hover card */}
    //       <img
    //         className="rounded-lg w-full h-40 object-cover"
    //         alt="thumbnail"
    //         src={IMG_CDN_URL + posterPath}
    //       />
    //       <ul className="mt-2">
    //         <li className="font-bold py-2">{information?.title}</li>
    //         <li className="text-gray-500">{information?.release_date}</li>
    //         {/* <li className="text-gray-500">{statistics?.viewCount} views</li> */}
    //       </ul>
    //     </div>
    //   )}
    // </div>
  );
};

export default MovieCard;
