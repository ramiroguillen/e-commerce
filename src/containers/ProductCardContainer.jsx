import React from "react";

const ProductCardContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-evenly gap-8">{children}</div>
  );
};

export default ProductCardContainer;
