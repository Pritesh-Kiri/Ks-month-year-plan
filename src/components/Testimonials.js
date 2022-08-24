import React from "react"
import TestimonialCard from "./TestimonialCard"
import JSON from "../data/testimonials.json"
import Slider from "react-slick"
// import "../styles/Testimonial.css"

const Testimonials = () => {
  const settings = {
    dots: true,
    // infinite: false,
    // speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 2,

    // sdgdfsgefdsgsd

    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  return (
    <div className="main-container-testimonials">
      <section className="testimonials-title">
        <h2>Customers Love Unschool</h2>
      </section>
      <div className="container-testimonials">
        <section className="coach-slider">
          <Slider {...settings}>
            {JSON.TestimonialData.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </Slider>
        </section>
      </div>
    </div>
  )
}

export default Testimonials
