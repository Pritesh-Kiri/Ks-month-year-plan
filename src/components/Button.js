import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Button = ({ text, source, id }) => {
  return (
    <div className="button-container">
      {/* <a href={`${source}`} target="__blank__">
        <div className="button">
          <p id={id}>{text}</p>
        </div>
      </a> */}
      <section onClick={() => scrollTo("#subscription")}>
        <div className="button">
          <p id={id}>{text}</p>
        </div>
      </section>
    </div>
  )
}

export default Button
