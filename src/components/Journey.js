import React from "react"

// import Button from "./Button"
// import { StaticImage } from "gatsby-plugin-image"
// import "../styles/Journey.css"

const Journey = () => {
  return (
    <div className="journey-container">
      <div className="journey-section">
        <div className="section-left padding-left">
          <h2>
            Explore Your <br />
            Passion
          </h2>
          <p className="section-subtitle">
            Develop your expertise with byte-sized courses curated by certified
            industry experts.
          </p>
          {/* <Button
            text={"Explore Courses"}
            source={"https://rzp.io/l/61RdShX"}
          /> */}
        </div>
        <div className="section-right ">
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1660295472/kickstarter/journey/Screent-shot_2_qpixjv.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="journey-section journey-section-rev">
        <div className="section-left padding-right">
          <h2>
            A Community <br /> to Support You
          </h2>
          <p className="section-subtitle">
            Learn from your peers and get a chance to network with Industry
            leaders and subject-matter experts.
          </p>
          {/* <Button
            text={"Explore Community"}
            source={"https://rzp.io/l/61RdShX"}
          /> */}
        </div>

        <div className="section-right">
          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1660206681/kickstarter/journey/2_hndwc7.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="journey-section">
        <div className="section-left padding-left ">
          <h2>
            New skills
            <br /> Everyday!
          </h2>
          <p className="section-subtitle">
            With over 100+ courses in the subscription explore a new skill
            everyday.
          </p>
          {/* <Button
            text={"Try Kickstarter"}
            source={"https://rzp.io/l/61RdShX"}
          /> */}
        </div>
        <div className="section-right">
          {/* <StaticImage
            src="https://static.skillshare.com/cdn-cgi/image/quality=85,format=auto/assets/images/homepage/three-beat-story/en/LOH_WhatWillYouDiscover_2096px.png"
            placeholder="tracedSVG"
            alt="Explore-courses"
            layout="fixed"
            height={576}
            width={1048}
            quality={100}
          /> */}

          <img
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1660295472/kickstarter/journey/Screent-shot_kitarc.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Journey
