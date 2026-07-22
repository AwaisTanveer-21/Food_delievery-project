"use client";
import React, { useState } from "react";
import ResturantLogin from "../_components/ResturantLogin";
import ResturantSignup from "../_components/ResturantSignup";

const Resturant = () => {
  // login state used for conditional rendinering in login and sign up page
  const [login, setLogin] = useState(true);
  // function for login state
  const toogle = () => {
    setLogin(!login);
  };

  return (
    <>
      <h1 className=" font-bold text-2xl text-center  p-2 bg-blue-800 text-white">
        Resturant Login /Signup page
      </h1>
      {login ? <ResturantSignup /> : <ResturantLogin />}

      <button onClick={toogle}>
        {login ? (
          <p className="text-gray-800 text-md capitalize">
            already have a account ?
            <span className="text-md text-blue-500 font-[jost] tracking-wider hover:text-blue-700 underline bottom-4">
              Sign up
            </span>{" "}
          </p>
        ) : (
          <p className="text-gray-800 text-md capitalize">
            don't have an account ?
            <span className="text-md text-blue-500 font-[jost] tracking-wider hover:text-blue-700  underline-offset-6 underline">
              sign In
            </span>{" "}
          </p>
        )}
      </button>
    </>
  );
};

export default Resturant;
