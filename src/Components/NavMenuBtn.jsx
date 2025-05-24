import React from "react";
import { Link } from "react-router-dom";

const NavMenuBtn = ({menuBtn, className}) => {
  return (
    <Link
      to={menuBtn["link"]}
      className={`${className} hover:-translate-y-1 duration-100 text-2xl hover:text-iconic p-1`}
    >
      {menuBtn["menu"]}
    </Link>
  );
};

export default NavMenuBtn;
