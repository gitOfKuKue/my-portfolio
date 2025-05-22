import React from "react";
import Navigation from "../Components/Navigation";

const ErrorPage = () => {
  return (
    <>
      <Navigation />
      <div className="flex justify-center items-center">
        <img
          src="./src/assets/images/404 Error-bro.svg"
          alt="404 Error"
          className="w-150 "
        />
        <div className="">
            <h1 className="text-8xl text-font font-bold">404 Error</h1>
            <p className="text-xl text-font mb-8">OOPS ... Sorry, page not found!</p>
            <button className="py-2 px-4 bg-iconic text-font font-bold">Go back home!</button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
