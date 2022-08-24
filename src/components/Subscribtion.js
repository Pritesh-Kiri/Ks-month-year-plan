import React, { useState } from "react"
import "../styles/subscription.css"

const Subscribtion = () => {
  const [active, setactive] = useState(false)
  return (
    <div className="subs-container" id="subscription">
      <div className="subs-card">
        <div className="subs-card-top">
          <div
            onClick={() => setactive(true)}
            className={
              active ? "top-mode top-mode-1 active" : "top-mode top-mode-1 "
            }
          >
            <p> 6 months</p>
          </div>
          <div
            onClick={() => setactive(false)}
            className={
              active ? "top-mode top-mode-2" : "top-mode top-mode-2 active"
            }
          >
            <p>12 months</p>
          </div>
        </div>
        <div className="subs-card-bottom">
          <div
            className={
              active
                ? "bottom-mode bottom-mode-1 show"
                : "bottom-mode bottom-mode-1"
            }
          >
            <div className="subs-title">
              <h3>Start learning today</h3>
              <p></p>
            </div>
            <div className="mode-usp">
              <div className="usp-point">
                <img
                  src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
                  alt="usp-icon-tick"
                />
                <p>Access 150+ course modules</p>
              </div>
              <div className="usp-point">
                <img
                  src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
                  alt="usp-icon-tick"
                />
                <p>Get access to the Unschool Community</p>
              </div>
              <div className="usp-point">
                <img
                  src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
                  alt="usp-icon-tick"
                />
                <p>Access to the Internship Portal</p>
              </div>
              <div className="usp-point">
                <img
                  src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
                  alt="usp-icon-tick"
                />
                <p>10 new course modules added every month</p>
              </div>
            </div>
            <div className="mode-price">
              <p>
                ₹3999 <span>for six months</span>
              </p>
            </div>
            <div className="mode-subs-button">
              <a href="https://rzp.io/l/al6Zcnx" target="__blank__">
                Enroll Now
              </a>
              <span>Save ₹3000 by choosing 12 months plan</span>
            </div>
          </div>
          <div
            className={
              active
                ? "bottom-mode bottom-mode-2"
                : "bottom-mode bottom-mode-2 show"
            }
          >
            <div className="subs-title">
              <h3>Start learning today</h3>
            </div>
            <div className="mode-usp">
              <div className="usp-point">
                <img
                  src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
                  alt="usp-icon-tick"
                />
                <p>Access 150+ course modules</p>
              </div>
              <div className="usp-point">
                <img
                  src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
                  alt="usp-icon-tick"
                />
                <p>Get access to the Unschool Community</p>
              </div>
              <div className="usp-point">
                <img
                  src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
                  alt="usp-icon-tick"
                />
                <p>Access to the Internship Portal</p>
              </div>
              <div className="usp-point">
                <img
                  src="https://res.cloudinary.com/di3tuzgef/image/upload/v1659426713/Levelup%20jobs/Tools/Tick_mark_o3abgl.png"
                  alt="usp-icon-tick"
                />
                <p>10 new course modules added every month</p>
              </div>
            </div>
            <div className="mode-price">
              <p>
                ₹4999 <span>for 12 months</span>
              </p>
            </div>
            <div className="mode-subs-button">
              <a href="https://rzp.io/l/bQ29YXT" target="__blank__">
                Enroll Now
              </a>
              <span>You saved ₹3000 by choosing 12 months plan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribtion
