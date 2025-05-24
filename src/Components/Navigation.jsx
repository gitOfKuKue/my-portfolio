import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMenuBtn from "./NavMenuBtn";

const Navigation = ({ current }) => {

  const menuBtns = [
    { 
      btnId: 1,
      menu: "Hello", 
      link: "/",
    },
    {
      btnId: 2,
      menu: "About", 
      link: "#",
    },
    {
      btnId: 3,
      menu: "Portfilio", 
      link: "#",
    },
    {
      btnId: 4,
      menu: "Work", 
      link: "#",
    },
    {
      btnId: 5,
      menu: "Blog", 
    },
    {
      btnId: 6,
      menu: "Contact", 
      link: "contact-me",
    }
  ];
  return (
    <nav className="flex justify-between items-center p-4">
      <Link to={"/"}>
        <img src={logo} alt="Logo Pic" className="w-30" />
      </Link>
      <div className="h-full text-xl flex justify-between gap-5 text-font py-1" >
        {menuBtns.map((menuBtn) => (
          <NavMenuBtn key={menuBtn.btnId} menuBtn={menuBtn} />
        ))}
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
