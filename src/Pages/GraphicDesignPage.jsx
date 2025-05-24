import React from "react";
import Container from "../Components/Container";
import { useParams } from "react-router-dom";
import portfolios from "../JavaScripts/portfolio";

const GraphicDesignPage = ({ graphicDesign }) => {
  const { gdId } = useParams(); // Taking id
  const currentGD = portfolios.find((portfolio) => portfolio.id == gdId); // Checking current product

  return (
    <>
      <section>
        <Container>
          <div className="grid grid-cols-2 gap-5">
            <img src={currentGD.image} alt={currentGD.title} className="" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default GraphicDesignPage;
