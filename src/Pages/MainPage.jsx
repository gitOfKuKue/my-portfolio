import React from "react";
import Navigation from "../Components/Navigation";
import Container from "../Components/Container";

const MainPage = () => {
  return (
    <>
      <main>
        <Navigation />
        {/* Hello Section */}
        <section className="hello-section py-20">
          <Container className="flex justify-between items-center">
            {/* Content Section */}
            <div className="text-font flex flex-col justify-between items-start h-[400px]">
              <p className="text-2xl font-bold">HELLO, I'M A</p>
              <h1 className="text-7xl font-bold leading-20 mb-4">
                Graphic <span className="text-iconic">Designer </span>
                &
                <br />
                <span className="text-iconic">Frontend</span> Developer
              </h1>
              <p className="text-font-light text-xl mb-4 w-[646px] text-justify">
                Hi, I'm Thu Htet Naing. You can call me Ku Kue, a passionate
                Graphic Designer & Frontend Developer based in the Vietnam.
                Welcome to portfolio world.
              </p>
              <button className="bg-iconic text-xl px-8 py-3 hover:bg-black duration-100">
                View Portfolio
              </button>
            </div>

            {/* Picture Section */}
            <img
              src="./src/assets/images/my-pic.png"
              alt="my picture"
              className="w-200"
            />
          </Container>
        </section>

        {/* About Me */}
        <section className="aboutme-section bg-aboutme absolute">
          <div class="custom-shape-divider-top-1747829722">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <Container className={"flex justify-between items-center py-30"}>
            {/* Picture Section */}
            <img
              src="./src/assets/images/my-pic2.png"
              alt="my pic 2"
              className="w-150"
            />
            {/* Content Section */}
            <div className="text-font w-[800px]">
              <p className="">Let me introduce myself</p>
              <h1 className="text-5xl text-iconic font-bold mb-5">About me</h1>
              <div className="mb-5">
                <h3 className="text-font font-bold text-xl">
                  A story of hardwork and ability
                </h3>
                <p className="text-font-light text-justify">
                  I am a software developer with a passion for creating
                  innovative solutions. I have a strong background in computer
                  science and a deep understanding of programming languages and
                  technologies. I am always looking for new challenges and
                  opportunities to learn and grow as a developer. I strongly believe that I can interact with teammates and communicate well. Besides, my ability is easy to learn for new things.
                </p>
              </div>

              <div className="">
                <h3 className="text-font font-bold text-xl">
                  Contact
                </h3>
                <p className="text-font-light text-justify">
                  If you have any questions or would like to discuss a project, please feel free to contact me at <a href="mailto:kukue014@gmail.com" className="font-bold text-iconic">kukue014@gmail.com</a> or <a href="#" className="font-bold text-iconic">Whatsapp</a>. I am always open to new opportunities and would love to hear from you!
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default MainPage;
