import React from "react"
import ButtonLink from "./ButtonLink"
// import HeroGIF from "../../static/Hero-gif.gif"
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-title">
          <h1>Learn without limits.</h1>
          <p>
            150+ online video courses with new additions published every month.
          </p>
        </div>
        <ButtonLink text={"Enroll Now"} mode={"desktop"} />
      </div>
      <div className="hero-image">
        <img
          src="https://res.cloudinary.com/di3tuzgef/image/upload/v1661337418/kickstarter/hero/Artboard_1_uy6b5w.png"
          alt="Hero GIF coaches"
        />
      </div>
      <ButtonLink text={"Enroll Now"} mode={"mobile"} />
    </div>
  )
}

export default Hero
