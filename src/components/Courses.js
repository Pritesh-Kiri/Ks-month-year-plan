import React, { useEffect } from "react"
import Coursecard from "./Coursecard"
import { useState } from "react"
import JSON from "../data/courses.json"
import Slider from "react-slick"
// import "../styles/courses.css"

const Courses = () => {
  const [filterItems, setFilterItems] = useState(JSON.CourseData)
  const [active, setactive] = useState("All Categories")
  useEffect(() => {
    const FirstLoad = JSON.CourseData.filter(item => item.Featured === true)
    setFilterItems(FirstLoad)
  }, [])

  const filterHandler = cate => {
    const filterI = JSON.CourseData.filter(item => item.category === cate)
    setFilterItems(filterI)
    setactive(cate)
  }

  useEffect(() => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
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
  }, [active])
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          initialSlide: 1,
        },
      },
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
    <div className="main-container-course">
      <section className="course-title">
        <h2>Discover life long learning</h2>
      </section>
      <div className="container-course">
        <section className="course-main">
          <div className="course-categories">
            <h4
              onClick={() => {
                const FirstLoad = JSON.CourseData.filter(
                  item => item.Featured === true
                )
                setFilterItems(FirstLoad)
                setactive("All Categories")
              }}
              className={
                active === "All Categories"
                  ? " active Category_title "
                  : "Category_title"
              }
            >
              All Categories
            </h4>
            <h4
              onClick={() => filterHandler("Vocational")}
              className={
                active === "Vocational"
                  ? " active Category_title "
                  : "Category_title"
              }
            >
              Vocational
            </h4>
            <h4
              onClick={() => filterHandler("Marketing")}
              className={
                active === "Marketing"
                  ? " active Category_title "
                  : "Category_title"
              }
            >
              Marketing
            </h4>
            <h4
              onClick={() => filterHandler("Management")}
              className={
                active === "Management"
                  ? " active Category_title "
                  : "Category_title"
              }
            >
              Management
            </h4>
            <h4
              onClick={() => filterHandler("Software")}
              className={
                active === "Software"
                  ? " active Category_title"
                  : "Category_title"
              }
            >
              Software
            </h4>
            <h4
              onClick={() => filterHandler("Coding")}
              className={
                active === "Coding"
                  ? " active Category_title "
                  : "Category_title"
              }
            >
              Coding
            </h4>

            <h4
              onClick={() => filterHandler("Data")}
              className={
                active === "Data" ? " active Category_title" : "Category_title"
              }
            >
              Data
            </h4>
          </div>
        </section>

        <section className="course-slider">
          <Slider {...settings}>
            {filterItems.map((item, index) => (
              <CourseCard key={index} item={item} />
            ))}
          </Slider>
        </section>
      </div>
    </div>
  )
}

export default Courses
