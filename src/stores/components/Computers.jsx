import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { computerData } from "../data/computers";  // Ensure this path is correct
import { Link } from "react-router-dom";

const Computers = () => {
  return (
    <div className="scroll-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 7000 }}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 6 },
        }}
      >
        {computerData.slice(0, 9).map((item) => (
          <SwiperSlide key={item.id}>
            <Link to="/computers">
              <img className="proImage" src={item.image} alt={`Computer ${item.id}`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Computers;
