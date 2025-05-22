import React from "react";
import Navigation from "../Components/Navigation";
import Container from "../Components/Container";
import ServicesSection from "../Components/ServicesSection";
import AboutMe from "../Components/AboutMe";
import Hello from "../Components/Hello";
import Portfolio from "../Components/PortfolioSection";
import Footer from "../Components/Footer";

const MainPage = () => {
  return (
    <>
      <main>
        <Navigation />
        {/* Hello Section */}
        <Hello />

        {/* About Me */}
        <AboutMe />

        {/* Services Section */}
        <ServicesSection />

        {/* Portfolio Section */}
        <Portfolio />

        {/* Footer Section */}
        <Footer />
      </main>
    </>
  );
};

export default MainPage;
