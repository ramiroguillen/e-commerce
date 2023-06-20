import React from "react";

const ProductListContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-start justify-evenly gap-4">
      {children}
    </div>
  );
};

export default ProductListContainer;
