import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInFrom, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInFrom);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
          alt="bgImg"
        />
      </div>
      <form className="absolute p-12 w-3/12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-70">
        <h1 className="text-3xl font-bold py-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 my-2 bg-gray-700 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-gray-700"
        />
        <button className="p-3 my-6 bg-red-700 rounded-lg w-full">
          Sign In
        </button>
        <p className="my-4 text-gray-400">
          {isSignInFrom ? "New to Netflix?" : "Already registered?"}
          <span
            className="cursor-pointer text-white font-bold hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInFrom ? " Sign Up Now." : " Sign In Now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
