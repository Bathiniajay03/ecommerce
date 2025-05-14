import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel3";
import { mobileData } from "../data/mobiles";
import { Link } from "react-router-dom";

// Import Owl Carousel styles
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Mobiles = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures OwlCarousel loads only on client-side
  }, []);

  // Display only the first 9 mobile images
  const firstNineImages = mobileData.slice(0, 20);
 
  const options = {
    loop: true,
    margin: 11,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000, // Adjust autoplay speed
    responsive: {
      0: { items: 1 },
      300: { items: 8 },
      100: { items: 6 },
    },
  };
  return (
    <>
    <div className="scroll-container">
      {isClient && ( // Prevents hydration issues in React
        <OwlCarousel className="owl-theme" {...options}>
          {firstNineImages.map((item) => (
            <div className="imgBox" key={item.id}>
              <Link to="/mobiles">
                <img className="proImage" src={item.image} alt={`Mobile ${item.id}`} />
              </Link>
            </div>
          ))}
        </OwlCarousel>
      )}
    </div>
    </>
  );
};

export default Mobiles;
