import React from "react";

const index = () => {
  return (
    <div>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div>{["Product 1", "Product 2"].map((product) => product)}</div>
    </div>
  );
};

export default index;
