import React, { useState } from "react"
import "../styles/subscription.css"
import { StaticImage } from "gatsby-plugin-image"
const Subscribtion = () => {
  const [active, setactive] = useState(false)
  return (
    <>
      <script
        src="https://js.chargebee.com/v2/chargebee.js"
        data-cb-site="unschool"
      ></script>

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
                  ₹1999 <span>for six months</span>
                </p>
              </div>
              <div className="mode-subs-button">
                <a
                  href="javascript:void(0)"
                  data-cb-type="checkout"
                  data-cb-item-0="Half-Yearly-INR-Every-6-months"
                  data-cb-item-0-quantity="1"
                >
                  subscribe
                </a>
                {/* <div className="ir-mobikwik-content">
                  Pay with&nbsp;
                  <span>
                    <StaticImage
                      src="../images/Mobikwik-Logo.png"
                      alt="MobiKwik Logo"
                      placeholder="blurred"
                      layout="fixed"
                      width={100}
                      quality={100}
                      className="ir-mobikwik-image"
                    />
                  </span>
                  &nbsp;wallet to get up to 1200 cashback on minimum purchase of
                  3999/-
                </div> */}
                <span>
                  Use code <strong>WINTEROFF</strong> during checkout
                </span>
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
                <a
                  href="javascript:void(0)"
                  data-cb-type="checkout"
                  data-cb-item-0="Yearly-Subscription-INR-Yearly"
                  data-cb-item-0-quantity="1"
                >
                  subscribe
                </a>

                {/* <div className="ir-mobikwik-content">
                  Pay with&nbsp;
                  <span>
                    <StaticImage
                      src="../images/Mobikwik-Logo.png"
                      alt="MobiKwik Logo"
                      placeholder="blurred"
                      layout="fixed"
                      width={100}
                      className="ir-mobikwik-image"
                      quality={100}
                    />
                    <img src="../images/Mobikwik.png" alt="" />
                  </span>
                  &nbsp;wallet to get up to 1200 cashback on minimum purchase of
                  3999/-
                </div> */}
                <span>
                  {" "}
                  Use code <strong>WINTEROFF</strong> during checkout
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscribtion
