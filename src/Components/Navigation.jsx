import React from "react";

const Navigation = () => {
  return (
    <nav className="h-[80px] flex justify-between items-center p-4">
      <img src="./src/assets/icons/logo.svg" alt="Logo Pic" className="w-30" />
      <div className="h-full text-xl flex justify-between gap-5 text-font py-1">
        <a href="#" className="hover:border-b-iconic hover:border-b-3 p-1 hover:-translate-y-1 duration-75">
          Hello
        </a>
        <a href="#" className="hover:border-b-iconic hover:border-b-3 p-1 hover:-translate-y-1 duration-75">
          About
        </a>
        <a href="#" className="hover:border-b-iconic hover:border-b-3 p-1 hover:-translate-y-1 duration-75">
          Profile
        </a>
        <a href="#" className="hover:border-b-iconic hover:border-b-3 p-1 hover:-translate-y-1 duration-75">
          Work
        </a>
        <a href="#" className="hover:border-b-iconic hover:border-b-3 p-1 hover:-translate-y-1 duration-75">
          Blog
        </a>
        <a href="#" className="hover:border-b-iconic hover:border-b-3 p-1 hover:-translate-y-1 duration-75">
          Contact
        </a>
      </div>
      <div className="flex justify-between items-center gap-4">
        <a href="#">
          <img
            src="./src/assets/icons/social.png"
            alt="Linkedin Icon"
            className="w-8 cursor-pointer"
          />
        </a>
        <a href="#">
          <img
            src="./src/assets/icons/whatsapp.png"
            alt="Linkedin Icon"
            className="w-8 cursor-pointer"
          />
        </a>
        <a href="#">
          <img
            src="./src/assets/icons/facebook.png"
            alt="Linkedin Icon"
            className="w-8 cursor-pointer"
          />
        </a>
        <button className="border border-iconic text-iconic px-4 py-2 cursor-pointer">
          Let's Talk!
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
