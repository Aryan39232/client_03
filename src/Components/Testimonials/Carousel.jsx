import React from "react";
import "./Carousel.css";
import { items } from "./Data";
import { ReactComponent as ArrowLeft } from "../../Assets/chevron-left-solid.svg";
import { ReactComponent as ArrowRight } from "../../Assets/chevron-right-solid.svg";
import { ReactComponent as Circle } from "../../Assets/circle-solid.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div>
        <svg
          className={className}
          onClick={onClick}
          style={{ transform: "rotate(180deg)" }}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="24"
          viewBox="0 0 15 24"
          fill="none"
        >
          <path
            d="M2 2L12 12L2 22"
            stroke="#52E6C2"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div>
        <svg
          className={className}
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="24"
          viewBox="0 0 15 24"
          fill="none"
        >
          <path
            d="M2 2L12 12L2 22"
            stroke="#52E6C2"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
    );
  };
  var settings = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      client_name: "Christine Natalie",
      client_message: `Awesome job .. was extremely happy with the END OF LEASE CLEANING . Definitely would recommend BEST 1 CLEANERS’’ they were very friendly and prompt..`,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample10.jpg",
    },
    {
      client_name: "Blerina  Griffith",
      client_message: `Great job, on time and friendly service`,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample33.jpg",
    },
    {
      client_name: "Kathryn brooke",
      client_message: `.Great servicec , value for money and my house smelled wonderful for days.`,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg",
    },
  ];

  return (
    <div className="slider_carousel">
      <Slider {...settings}>
        {testimonials?.map((el, i) => {
          return (
            <div className="slider_item">
              <figure class="snip1197">
                <figcaption>
                  <blockquote>{el?.client_message}</blockquote>
                  <div class="arrow"></div>
                </figcaption>
                <img src={el?.image} alt="sq-sample10" />
                <div class="author">
                  <h5>
                    <span>{el?.client_name}</span>
                  </h5>
                </div>
              </figure>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
