import React from "react";

const ProductListItem = () => {
  return (
    <div className="flex w-full bg-black rounded-xl">
      <img
        src="https://placekitten.com/100/100"
        alt="product"
        className="rounded-l-xl"
      />
      <div className="flex w-full flex-col p-3 justify-center">
        <p className="font-bold text-primary">BOX x4</p>
        <p className="text-lg text-white">$4000</p>
      </div>
      <div className="flex w-full gap-3 items-center justify-end p-3">
        <button className="bg-primary py-2 rounded px-8 uppercase text-sm mr-3">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;
