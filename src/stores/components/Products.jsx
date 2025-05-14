import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computers";
import Watch from "./Watch";
import Men from "./Men";
import Woman from "./Woman";
import Furniture from "./Furniture";
import AC from "./AC";
import Kitchen from "./Kitchen";
import Speaker from "./Speaker";
import Tv from "./TV"
import Footer from "./Footer";

const Products = () => {
  return (
    <div>
      <Mobiles />
      <Computers />
      <Speaker/>
      <Watch />
      <Tv/>
      <Men/>
      <Woman />
      <Furniture />
      <AC />
      <Kitchen />
      <Footer/>
     
    </div>
  );
};

export default Products;