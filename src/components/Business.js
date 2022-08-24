import React from "react"

import { StaticImage } from "gatsby-plugin-image"
// import "../styles/Business.css"
import Button from "./Button"

const Business = () => {
  return (
    <div className="Business-section">
      <div className="section-title">
        <h2>We’re trusted, backed and powered by the best in the industry</h2>
      </div>
      <div className="section-logo">
        <img
          src="https://res.cloudinary.com/di3tuzgef/image/upload/v1660201471/kickstarter/business/download_5_gqgi38.png"
          placeholder="blurred"
          alt="Linkedin"
        />
        <img
          src="https://res.cloudinary.com/di3tuzgef/image/upload/v1660201472/kickstarter/business/download_9_hqxw5k.png"
          placeholder="blurred"
          alt="Linkedin"
        />{" "}
        <img
          src="https://res.cloudinary.com/di3tuzgef/image/upload/v1660201471/kickstarter/business/download_1_upkq10.png"
          placeholder="blurred"
          alt="Linkedin"
        />{" "}
        <img
          src="https://res.cloudinary.com/di3tuzgef/image/upload/v1660201471/kickstarter/business/download_2_gtfuzb.png"
          placeholder="blurred"
          alt="Linkedin"
        />{" "}
        <img
          src="https://res.cloudinary.com/di3tuzgef/image/upload/v1660201471/kickstarter/business/Logo-PNG_tdxrzs.png"
          placeholder="blurred"
          alt="Linkedin"
        />{" "}
        <img
          src="https://res.cloudinary.com/di3tuzgef/image/upload/v1660201471/kickstarter/business/Nasscom-logo-svg_jyhuyp.png"
          placeholder="blurred"
          alt="Linkedin"
        />{" "}
        <img
          src="https://res.cloudinary.com/di3tuzgef/image/upload/v1660201471/kickstarter/business/download_6_vrwrzl.png"
          placeholder="blurred"
          alt="Linkedin"
        />
      </div>
      <div className="section-content">
        <div className="section-content-left">
          <div className="section-content-left-title">
            <StaticImage
              src="https://res.cloudinary.com/di3tuzgef/image/upload/v1661073574/kickstarter/business/Unschool_Logo_Grey_esbbej.webp"
              placeholder="blurred"
              alt="RAYAN"
              className="section-content-left-title-img"
              quality={100}
            />
            <span>for Business</span>
          </div>
          <div className="section-content-left-content">
            <p>
              Get unlimited access to 200+ of Unschool’s top courses for your
              team. Learn and improve skills across business, tech, design, and
              more.
            </p>
          </div>
          <Button
            source={
              "mailto:admin@unschool.in?subject=Business with unschool &body=Hello Unschool Team,%0D%0A %0D%0A This email is to request you for a call reagarding Unschool for business courses. I have a team of < add number > employees that have expertise in < your domain >. I wish to expand my team's knowledge in the field of < upskill field >. Our Company's major aim to take up these courses is to < reason >. I will await the calendar invite from the Unschool team to discuss further process. %0D%0A %0D%0A Thankyou! "
            }
            text={"Get Unschool Business"}
          />
        </div>

        <div className="section-content-right">
          <StaticImage
            src="https://res.cloudinary.com/di3tuzgef/image/upload/v1660217749/kickstarter/business/Working_Women_1_qi3qd5.jpg"
            placeholder="blurred"
            alt="RAYAN"
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default Business
