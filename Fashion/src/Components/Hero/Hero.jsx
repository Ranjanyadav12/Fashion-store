import React, { useEffect, useState } from "react";
import "./Hero.css";

import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";

const slides = [
  {
    image: hero1,
    subtitle: "NEW COLLECTION",
    title: "NEW SUMMER COLLECTION",
    description: "Lightweight styles, modern fits crafted for the season.",
  },
  {
    image: hero2,
    subtitle: "MEN'S FASHION",
    title: "MODERN STREET STYLE",
    description: "Discover premium outfits designed for everyday comfort.",
  },
  {
    image: hero3,
    subtitle: "LIMITED EDITION",
    title: "TRENDING COLLECTION",
    description: "Premium quality fashion for every occasion.",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={slide.image} alt="" />

          <div className="hero-content">

            <p>{slide.subtitle}</p>

            <h1>{slide.title}</h1>

            <span>{slide.description}</span>

            <button>Shop Now</button>

          </div>
        </div>
      ))}

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active-dot" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

    </section>
  );
}

export default Hero;