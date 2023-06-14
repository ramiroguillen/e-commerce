import React from "react";

const ProductCard = () => {
  return (
    <div className="w-96 rounded-xl drop-shadow-lg">
      <img
        src="https://placekitten.com/400/400"
        alt="BOX x4"
        className="rounded-t-xl"
      />
      <div className="bg-black text-white h-20 rounded-b-xl flex flex-col items-center justify-center pt-1">
        <p className="font-thin">BOX x4</p>
        <p className="text-lg font-bold">$4000</p>
      </div>
    </div>
  );
};

export default ProductCard;
