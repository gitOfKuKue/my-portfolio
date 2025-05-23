import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-iconic py-20 px-10 text-background mt-auto">
      <h1 className="text-xl font-bold">Thu Htet Naing @ Ku Kue.</h1>
      <div className="grid grid-cols-5 border-b-1 border-dashed py-20">
        <ul className="col-span-1 h-full flex flex-col justify-evenly items-start">
          <li className="text-md">Hello!</li>
          <li className="text-md">Why me?</li>
          <li className="text-md">Services</li>
        </ul>
        <ul className="col-span-1 h-full flex flex-col justify-evenly items-start">
          <li className="text-md">Graphic Design</li>
          <li className="text-md">Content Writing</li>
          <li className="text-md">Frontend Web Development</li>
        </ul>
        <ul className="col-span-1 h-full flex flex-col justify-evenly items-start">
          <li className="text-md">Portfolio</li>
          <li className="text-md">Curriculum Vitae</li>
          <li className="text-md">Contact me</li>
        </ul>
        <div className="col-span-2">
          <p className="">GOT A POSITION IN MIND?</p>
          <h1 className="text-8xl">Let's talk</h1>
        </div>
      </div>

      <div className="flex justify-between items-baseline py-5">
        <p>© {date.getFullYear()} @ Ku Kue</p>
        <div className="flex justify-between gap-5">
          <Link className="bg-background text-xl text-iconic py-2 px-4 rounded-md cursor-pointer">
            Compose
          </Link>
          <a href="#">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-5xl"
              name="facebook(Ku Kue)"
            />
          </a>
          <a href="mailto:kukue014@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-5xl"
              name="email"
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-5xl"
              name="Whatsapp"
            />
          </a>
        </div>
      </div>

      <div className="flex justify-start items-center gap-3">
        <div className="bg-dark inline-block p-3 rounded-md">
          <img src={logo} alt="logo" className="w-50" />
        </div>
        <ul className="">
          <li>Graphic Designer</li>
          <li>Content Writer</li>
          <li>Frontend Web Developer</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
