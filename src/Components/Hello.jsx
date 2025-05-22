import React from "react";
import Container from "./Container";

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
        <img
          src="https://www.google.com/imgres?q=picture&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F036%2F324%2F708%2Fsmall%2Fai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fpicture&docid=wska7sM6RxRdCM&tbnid=crGgp78bfBsQFM&vet=12ahUKEwjLoeDenLeNAxXQm68BHcujFYAQM3oECH8QAA..i&w=300&h=200&hcb=2&ved=2ahUKEwjLoeDenLeNAxXQm68BHcujFYAQM3oECH8QAA"
          alt="my picture"
          className="w-150"
        />
      </Container>
    </section>
  );
};

export default Hello;
