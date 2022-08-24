import React from "react"
import { Helmet } from "react-helmet"
import "../styles/style.css"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import Navbar from "../components/NavBar"
import Hero from "../components/Hero"
import PoweredBy from "../components/PoweredBy"
import Courses from "../components/Courses"
import DividerContainer from "../components/DividerContainer"
import Journey from "../components/Journey"
import Coaches from "../components/Coaches"
import Subscribtion from "../components/Subscribtion"
import Testimonials from "../components/Testimonials"
import Numbers from "../components/Numbers"
import Business from "../components/Business"
import Faq from "../components/Faq"
import Footer from "../components/Footer"

import FloatButton from "../components/FloatButton"

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>India’s Best Free E-Learning Library | Unschool</title>
        <meta
          name="description"
          content="Introducing 'OTT for learning. Explore the E-Learning library with 500+ courses and still counting. Start your 7 days free trial now!"
        />
        <link
          rel="apple-touch-icon"
          sizes="256x256"
          href="https://www.unschool.in/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.unschool.in/img/apple-touch-icon.png"
          sizes="256x256"
        />
      </Helmet>
      <FloatButton />
      <Navbar />
      {/*
       */}
      <Hero />
      <PoweredBy />
      <Courses />
      <DividerContainer />
      <Journey />
      <Coaches />
      <Subscribtion />
      <Testimonials />
      <Numbers />
      <Business />
      <Faq />
      <Footer />
      {/*
     
      
       */}
    </div>
  )
}
