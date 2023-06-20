import React from "react";
import { MdHandyman } from "react-icons/md";
import { RiVipCrownFill, RiPlantFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import ProductCard from "../components/ProductCard";
import ProductCardContainer from "../containers/ProductCardContainer";

const Landing = () => {
  return (
    <>
      <section
        id="hero"
        className="bg-hero h-96 py-20 px-48 flex justify-center items-center"
      >
        <div className="flex flex-col items-center justify-center bg-white bg-opacity-40 backdrop-blur-lg rounded-xl drop-shadow-lg">
          <p className="px-16 text-xl text-center py-10 font-medium">
            Wonder Botanics se creó con la idea de que puedas preparar los
            mejores tragos con nuestra selección de especias para que
            experimentes e inventes tu mejor trago, o simplemente disfrutar de
            una manera clásica en cualquier lugar y con cualquier compañía.
          </p>
        </div>
      </section>

      <section id="about" className="my-24 bg-primary text-black shadow-lg">
        <ul className="flex h-28 justify-around items-center">
          <li className="flex items-center text-lg">
            <div className="rounded-full border border-black h-12 w-12 flex justify-center items-center me-3 text-xl">
              <MdHandyman />
            </div>
            Producto 100% Artesanal
          </li>
          <li className="flex items-center text-lg">
            <div className="rounded-full border border-black h-12 w-12 flex justify-center items-center me-3 text-xl">
              <RiVipCrownFill />
            </div>
            Detalles que marcan la diferencia
          </li>
          <li className="flex items-center text-lg">
            <div className="rounded-full border border-black h-12 w-12 flex justify-center items-center me-3 text-xl">
              <RiPlantFill />
            </div>
            Botánicos para tus tragos
          </li>
          <li className="flex items-center text-lg">
            <div className="rounded-full border border-black h-12 w-12 flex justify-center items-center me-3 text-xl">
              <BsPeopleFill />
            </div>
            Venta por mayor y menor
          </li>
        </ul>
      </section>

      <section id="showcase" className="flex flex-col items-center px-8 mb-36">
        <h2 className="text-4xl font-bold mb-20">PEDI TU BOX</h2>
        <ProductCardContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductCardContainer>
      </section>
    </>
  );
};

export default Landing;
