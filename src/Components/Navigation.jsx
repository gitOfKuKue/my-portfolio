import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link to={"/"}>
        <img src={logo} alt="Logo Pic" className="w-30" />
      </Link>
      <div className="h-full text-xl flex justify-between gap-5 text-font py-1">
        <Link to={"/"}
          className="hover:-translate-y-1 duration-100 text-2xl hover:text-iconic p-1"
        >
          Hello
        </Link>
        <Link to="/#about"
          className="hover:-translate-y-1 duration-100 text-2xl hover:text-iconic p-1"
        >
          About
        </Link>
        <Link
          to="#portfolio"
          className="hover:-translate-y-1 duration-100 text-2xl hover:text-iconic p-1"
        >
          Portfolio
        </Link>
        <a
          href="#"
          className="hover:-translate-y-1 duration-100 text-2xl hover:text-iconic p-1"
        >
          Work
        </a>
        <a
          href="#"
          className="hover:-translate-y-1 duration-100 text-2xl hover:text-iconic p-1"
        >
          Blog
        </a>
        <Link to={"/contactme"}
          className="hover:-translate-y-1 duration-100 text-2xl hover:text-iconic p-1"
        >
          Contact
        </Link>
      </div>
      <div className="flex justify-between items-center gap-4">
        <Link
          to={"/cv"}
          className="bg-iconic px-4 text-font cursor-pointer py-2"
        >
          Curriculum Vitae
        </Link>
        <a
          href="tel:+84898247910"
          className="hover:bg-iconic hover:text-font border border-iconic text-iconic px-4 py-2 cursor-pointer"
        >
          Let's Talk!
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
