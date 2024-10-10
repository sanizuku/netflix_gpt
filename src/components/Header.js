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
    <div className="flex absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img className="w-44" src={netflix_Logo} alt="logonfx" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
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
            className="px-4 py-2 mx-4 my-2  bg-purple-800 text-white rounded-lg"
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img className="w-12 h-12" src={User_Avatar} alt="userIcon" />
          <button
            className="p-1 mb-4 font-bold text-white"
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
