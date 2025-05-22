import React from "react";
import Container from "./Container";
import GraphicDesignCard from "./GraphicDesingCard";
import ContentWritingCard from "./ContentWritingCard";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      image: "./src/assets/portfolios/graphic-design/book-cover1.jpg",
      title: "Tasumiki N4 Japanese Book",
      type: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 2,
      image: "./src/assets/portfolios/graphic-design/book-cover2.jpg",
      title: "ကျွန်တော်သိသောဖြည့်စွက်စာများအကြောင်း",
      type: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 3,
      image: "./src/assets/portfolios/graphic-design/book-front-cover3.jpg",
      title: "Book Cover",
      type: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 4,
      image: "./src/assets/portfolios/graphic-design/book-back-cover3.jpg",
      title: "Book Cover",
      type: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 5,
      image: "./src/assets/images/content-pic1.jpg",
      title: "How to be good at frist impression.",
      type: "Content Writing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 6,
      image: "./src/assets/images/content-pic2.jpg",
      title: "Scholarship at Chiang Mai University",
      type: "Content Writing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 7,
      image: "./src/assets/images/content-pic3.jpg",
      title: "Summer Vibe Movies",
      type: "Content Writing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 7,
      image: "./src/assets/portfolios/frontend-web-dev/Ayee-dropshipping.png",
      title: "Ayee Dropshipping",
      type: "Frontend Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 8,
      image: "./src/assets/portfolios/frontend-web-dev/my-portfolio1.png",
      title: "Ayee Dropshipping",
      type: "Frontend Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 9,
      image: "./src/assets/portfolios/frontend-web-dev/info-assistance1.png",
      title: "Info Assistance",
      type: "Frontend Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 10,
      image: "./src/assets/portfolios/frontend-web-dev/UCSY-table-tennis-club.png",
      title: "UCSY Table Tennis Club Website",
      type: "Frontend Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 11,
      image: "./src/assets/portfolios/frontend-web-dev/UCSY-store.png",
      title: "UCSY Store Website",
      type: "Frontend Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 12,
      image: "./src/assets/portfolios/frontend-web-dev/Bithumbnn-crypto-web.png",
      title: "Bithumbnn Crypto Trading Web",
      type: "Frontend Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];

  return (
    <section className="">
      <Container className="">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-iconic text-6xl font-bold">Portfolio</h1>

          {/* Menu section */}
          <div className="text-font bg-dark py-2 px-8 flex justify-between items-center gap-5 rounded-md">
            <button className="cursor-pointer text-xl text-font hover:text-iconic hover:border-b-iconic hover:border-b-2">
              All
            </button>{" "}
            |
            <button className="cursor-pointer text-xl text-font hover:text-iconic hover:border-b-iconic hover:border-b-2">
              Graphic Design
            </button>{" "}
            |
            <button className="cursor-pointer text-xl text-font hover:text-iconic hover:border-b-iconic hover:border-b-2">
              Content
            </button>{" "}
            |
            <button className="cursor-pointer text-xl text-font hover:text-iconic hover:border-b-iconic hover:border-b-2">
              Frontend Design
            </button>
          </div>

          {/* Left, Right arrows */}
          <div className="flex justify-between items-center gap-3">
            <button className="hover:bg-aboutme bg-dark h-full px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-font"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button className="hover:bg-aboutme bg-dark h-full px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-font"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Graphic Design Card Section */}
        <div className="mb-8">
          <h1 className="text-2xl text-font font-bold mb-3">Graphic Design</h1>
          <div className="grid grid-cols-2 gap-5">
            {portfolios.map(
              (portfolio) =>
                portfolio.type === "Graphic Design" && (
                  <GraphicDesignCard key={portfolio.id} portfolio={portfolio} />
                )
            )}
          </div>
        </div>

        {/* Content Writing Card Section */}
        <div className="mb-8">
          <h1 className="text-2xl text-font font-bold mb-3">Content Writing</h1>
          <div className="grid grid-cols-3 gap-5">
            {portfolios.map(
              (portfolio) =>
                portfolio.type === "Content Writing" && (
                  <ContentWritingCard
                    key={portfolio.id}
                    portfolio={portfolio}
                  />
                )
            )}
          </div>
        </div>

        {/* Frontend Web Development Card Section */}
        <div className="mb-8">
          <h1 className="text-2xl text-font font-bold mb-3">Frontend Web Development</h1>
          <div className="grid grid-cols-1 gap-5">
            {portfolios.map(
              (portfolio) =>
                portfolio.type === "Frontend Web Development" && (
                  <ContentWritingCard
                    key={portfolio.id}
                    portfolio={portfolio}
                  />
                )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
