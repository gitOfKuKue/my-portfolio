import React from "react";

const ErrorAlert = ({ className, error, isError }) => {

  return (
    <div
      className={`${className} ${(isError == false) && "hidden"} p-5 rounded-md bg-dark fixed top-[30%] right-[50%] translate-x-[50%]`}
    >
      <h1 className="text-2x mb-5">{error}</h1>
      <p align="right">
        <input
          type="submit"
          value="OK"
          className="bg-iconic text-font text-md py-2 px-4 rounded-md cursor-pointer"
        />
      </p>
    </div>
  );
};

export default ErrorAlert;
