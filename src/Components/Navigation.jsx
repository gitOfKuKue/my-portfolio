import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Navigation = () => {
  return (
    <nav className="h-[80px] flex justify-between items-center p-4">
      <img src={logo} alt="Logo Pic" className="w-30" />
      <div className="h-full text-xl flex justify-between gap-5 text-font py-1">
        <a href="#" className="hover:border-b-iconic hover:border-b-2 hover:text-iconic p-1 hover:-translate-y-1 duration-75 text-iconic">
          Hello
        </a>
        <a href="#about" className="hover:border-b-iconic hover:border-b-2 hover:text-iconic p-1 hover:-translate-y-1 duration-75">
          About
        </a>
        <a href="#portfolio" className="hover:border-b-iconic hover:border-b-2 hover:text-iconic p-1 hover:-translate-y-1 duration-75">
          Portfolio
        </a>
        <a href="#" className="hover:border-b-iconic hover:border-b-2 hover:text-iconic p-1 hover:-translate-y-1 duration-75">
          Work
        </a>
        <a href="#" className="hover:border-b-iconic hover:border-b-2 hover:text-iconic p-1 hover:-translate-y-1 duration-75">
          Blog
        </a>
        <a href="#" className="hover:border-b-iconic hover:border-b-2 hover:text-iconic p-1 hover:-translate-y-1 duration-75">
          Contact
        </a>
      </div>
      <div className="flex justify-between items-center gap-4">
        <Link to={"/cv"} className="bg-iconic px-4 text-font cursor-pointer py-2">Curriculum Vitae</Link>
        <a href="tel:+84898247910" className="hover:bg-iconic hover:text-font border border-iconic text-iconic px-4 py-2 cursor-pointer">
          Let's Talk!
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
