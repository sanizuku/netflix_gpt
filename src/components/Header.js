import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  netflix_Logo,
  SUPPORTED_LANGUAGES,
  User_Avatar,
} from "../utils/constants";
import { movieInfo, toogleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleGptClick = () => {
    dispatch(movieInfo({ movieName: null, movieResult: null }));
    dispatch(toogleGptSearchView());
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="flex fixed w-screen px-8 bg-gradient-to-b from-black z-10 justify-between flex-row bg-stone-950 bg-opacity-50">
      <img
        className="w-24 h-12 md:h-12 md:w-28 md:m-0 md:mt-4"
        src={netflix_Logo}
        alt="logonfx"
      />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="rounded-lg text-xs w-20 h-8 md:w-36 md:h-12 pl-4 md:pl-4 md:my-2 md:text-base  bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptClick}
            className="ml-2 text-xs w-20 h-8 md:w-28 md:h-12   md:my-2 md:text-base bg-red-700 text-white rounded-lg cursor-pointer"
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img
            className="md:w-12 md:h-10 md:ml-3 md:mt-2  w-8 h-7  ml-2"
            src={User_Avatar}
            alt="userIcon"
          />
          <button
            className=" md:-mt-1 font-bold text-xs md:text-base text-white"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
