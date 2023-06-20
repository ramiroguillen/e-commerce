import React from "react";

const ProductCard = () => {
  return (
    <div className="w-96 rounded-xl drop-shadow-lg">
      <img
        src="https://placekitten.com/400/400"
        alt="BOX x4"
        className="rounded-t-xl"
      />
      <div className="bg-black text-white h-28 rounded-b-xl flex flex-col items-center justify-center pt-1">
        <p className="font-thin text-primary">BOX x4</p>
        <p className="text-lg font-bold mb-3">$4000</p>
        <button className="bg-primary text-black rounded uppercase text-sm mb-3 py-1 px-8">Arma tu box</button>
      </div>
    </div>
  );
};

export default ProductCard;
