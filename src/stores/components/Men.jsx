import React from "react";

import { menData } from "../data/men";
import { Link } from "react-router-dom";

const Men = () => {
  const firstFiveImages = menData.slice(0, 6);
  
  return (
    <>
      <div className="proTitle">
        <h2>Men</h2>
      </div>
      <div className="proSection">
      {firstFiveImages.map((item) => {
        return (
          <div className="imgBox" key={item.id}>
            <Link to='/men'>
            <img className="proImage" src={item.image} alt="" />
            </Link>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Men;


