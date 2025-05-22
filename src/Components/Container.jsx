import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`m-auto w-[1200px] ${className}`}>{children}</div>
  )
}

export default Container