import React from "react";
import Container from "./Container";
import GraphicDesignCard from "./GraphicDesingCard";
import ContentWritingCard from "./ContentWritingCard";
import portfolios from "../JavaScripts/portfolio";

const Portfolio = () => {

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
