import React from "react"

const TestimonialCard = ({ item }) => {
  return (
    <section className="testimonial-card">
      <div className="testimonial-card-top">
        <div className="testimonial-img">
          <img src={item.img} alt="profile" />
        </div>
        <div className="testimonial-name">
          <h3>{item.customer}</h3>
          <p>{item.designation}</p>
        </div>
        <img
          src="https://res.cloudinary.com/di3tuzgef/image/upload/v1657539767/kickstarter/quote_jczwcx.png"
          alt="quote"
          className="quote"
        />
      </div>

      <div className="testimonial-content">
        <p>{item.review}</p>
      </div>
    </section>
  )
}

export default TestimonialCard
