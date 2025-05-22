import React from 'react'
import { Link } from 'react-router-dom'

const ContentWritingCard = ({portfolio}) => {
  return (
    <div className="p-3 bg-aboutme flex flex-col justify-start items-start gap-3 text-font rounded-md">
      <img src={`${portfolio.image}`} alt="Portfolio Card" className="w-full" />
      <div className="h-full flex flex-col items-start justify-between">
        <h1 className="text-2xl font-bold">{portfolio.title}</h1>
        <h3 className="text-font-light mb-3">{portfolio.type}</h3>
        <p className="mt-auto line-clamp-3 mb-5">{portfolio.description}</p>
        <Link to={""} className="bg-iconic py-2 px-4">More details</Link>
      </div>
    </div>
  )
}

export default ContentWritingCard