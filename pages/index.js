import React from "react";
import { Product, FooterBanner, HeroBanner } from "../component";

const index = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div>{["Product 1", "Product 2"].map((product) => product)}</div>
      <FooterBanner />
    </div>
  );
};

export default index;
