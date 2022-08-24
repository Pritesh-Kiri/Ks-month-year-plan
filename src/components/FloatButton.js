import React, { useState } from "react"

const FloatButton = () => {
  const [show, setshow] = useState(false)
  const [mshow, msetshow] = useState(false)

  const isBrowser = typeof window !== "undefined" && window
  const scrolling = () => {
    if (isBrowser.scrollY > 700 && isBrowser.screen.width > 1200) {
      return setshow(true)
    } else if (isBrowser.scrollY > 700 && isBrowser.screen.width < 776) {
      return msetshow(true)
    } else {
      setshow(false)
      msetshow(false)
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrolling)
  }
  return (
    <div
      className={
        mshow ? "float-button-container show" : "float-button-container"
      }
    >
      <div className={show || mshow ? "float-btn show" : "float-btn"}>
        <div onClick={() => window.open("https://rzp.io/l/61RdShX", "_blank")}>
          Apply now
        </div>
      </div>
    </div>
  )
}

export default FloatButton
