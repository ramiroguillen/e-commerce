import React from "react";
import ProductCardContainer from "../containers/ProductCardContainer";
import ProductCard from "../components/ProductCard";
import ProductListContainer from "../containers/ProductListContainer";
import ProductListItem from "../components/ProductListItem";

const Products = () => {
  return (
    <section id="products" className="flex p-8">
      <div id="filters" className="w-1/5">
        <h2>Filtros</h2>
      </div>
      <div className="w-4/5 flex flex-col">
        <div id="boxes">
          <h2 className="text-3xl font-bold mb-3">BOXES</h2>
          <ProductCardContainer>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ProductCardContainer>
        </div>
        <div id="botanics">
          <h2 className="text-3xl font-bold mb-3 mt-8">BOTANICOS</h2>
          <ProductListContainer>
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
          </ProductListContainer>
        </div>
      </div>
    </section>
  );
};

export default Products;
