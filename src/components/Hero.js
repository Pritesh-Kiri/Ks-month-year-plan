import React from "react"
import Button from "./Button"
// import HeroGIF from "../../static/Hero-gif.gif"
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-title">
          <h1>Explore thousands of industry relevant skill courses.</h1>
        </div>
        <Button text={"Enroll now"} source={"https://rzp.io/l/61RdShX"} />
      </div>
      <div className="hero-image">
        <img
          src="https://res.cloudinary.com/di3tuzgef/image/upload/v1661265624/kickstarter/hero/2400x1350-01_1_qmvvqu.jpg"
          alt="Hero GIF coaches"
        />
      </div>
    </div>
  )
}

export default Hero
