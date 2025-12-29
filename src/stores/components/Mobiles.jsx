import React from "react";
import { mobileData } from "../data/mobiles";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Mobiles = () => {
  const firstNineImages = mobileData.slice(0, 20);

  return (
    <div className="scroll-container">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={6000}
        arrows
      >
        {firstNineImages.map((item) => (
          <div className="imgBox" key={item.id}>
            <Link to="/mobiles">
              <img
                className="proImage"
                src={item.image}
                alt={`Mobile ${item.id}`}
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Mobiles;
