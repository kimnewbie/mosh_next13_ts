"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      {/* button에 className으로 Daisy UI 적용 */}
      <button className="btn btn-success" onClick={() => console.log("Click")}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
