import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const ButtonLink = ({ mode, text }) => {
  return (
    <div className="button-container" id={mode}>
      <section
        target="__blank__"
        className="link"
        onClick={() => scrollTo("#subscription")}
      >
        <div className="button">
          <p>{text}</p>
        </div>
      </section>
    </div>
  )
}

export default ButtonLink
