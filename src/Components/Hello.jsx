import React from "react";
import Container from "./Container";
import myPic from "../assets/images/my-pic.png";

const Hello = () => {
  return (
    // Hello Section
    <section className="hello-section py-20">
      <Container className="flex justify-between items-center">
        {/* Content Section */}
        <div className="text-font flex flex-col justify-between items-start h-[400px]">
          <p className="text-2xl font-bold">HELLO, I'M A</p>
          <h1 className="text-6xl font-bold leading-20 mb-4">
            Graphic <span className="text-iconic">Designer </span>
            &
            <br />
            <span className="text-iconic">Frontend</span> Developer
          </h1>
          <p className="text-font-light text-xl mb-4 w-[600px] text-justify">
            Hi, I'm Thu Htet Naing. You can call me Ku Kue, a passionate Graphic
            Designer & Frontend Developer based in the Vietnam. Welcome to
            portfolio world.
          </p>
          <button className="bg-iconic text-xl px-8 py-3 hover:bg-black duration-100 rounded-md">
            View Portfolio
          </button>
        </div>

        {/* Picture Section */}
        {/* <img
          src="./src/assets/images/my-pic.png"
          alt="my picture"
          className="w-150"
        /> */}
        <img src={myPic} alt="MY PIC3" className="w-150"/>
      </Container>
    </section>
  );
};

export default Hello;
