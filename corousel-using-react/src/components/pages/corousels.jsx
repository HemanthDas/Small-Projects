import React, { useState } from "react";
import slides from "../images.json";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
function Corousels() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % 3);
  };
  const prevSlide = () => {
    console.log(slide);
    setSlide(slide === 0 ? 2 : slide - 1);
  };
  return (
    <div className="courusel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {slides.slides.map((e, index) => {
        return (
          <img
            key={index}
            src={e.src}
            alt={e.alt}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {slides.slides.map((_, index) => {
          return (
            <button
              key={index}
              onClick={null}
              className={
                slide === index ? "indicator" : "indicator indicator-hidden"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Corousels;
