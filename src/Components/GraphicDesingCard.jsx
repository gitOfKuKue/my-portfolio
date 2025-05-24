import React from "react";
import { Link } from "react-router-dom";

const GraphicDesignCard = ({ portfolio }) => {
  const id = portfolio.id;
  return (
    <div className="p-3 bg-aboutme flex justify-start items-start gap-3 text-font rounded-md">
      <img src={`${portfolio.image}`} alt="Portfolio Card" className="w-50" />
      <div className="h-full flex flex-col items-start justify-between">
        <h1 className="text-2xl font-bold">{portfolio.title}</h1>
        <h3 className="text-font-light">{portfolio.type}</h3>
        <p className="mt-auto line-clamp-3 mb-5">{portfolio.description}</p>
        <Link to={`/graphic-designs/${id}`} className="bg-iconic py-2 px-4">More details</Link>
      </div>
    </div>
  );
};

export default GraphicDesignCard;
