import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] md:pt-[20%] px-10 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-l md:text-6xl font-bold">{title}</h1>
      <p className="text-xs py-3 md:py-6 md:text-lg w-2/3">{overview}</p>
      <div>
        <button className="bg-white text-black p-1 px-5 text-md md:p-3 md:px-10 md:text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-1 px-5 text-md md:p-3 md:px-10 md:text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
