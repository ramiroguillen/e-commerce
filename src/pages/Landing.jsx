import React from "react";

const Landing = () => {
  return (
    <>
      <section
        id="hero"
        className="bg-hero h-96 py-20 px-48 flex justify-center items-center"
      >
        <div className="flex flex-col items-center justify-center bg-white bg-opacity-40 backdrop-blur-lg rounded drop-shadow-lg">
          <p className="px-16 text-xl text-center py-10 font-medium">
            Wonder Botanics se creó con la idea de que puedas preparar los
            mejores tragos con nuestra selección de especias para que
            experimentes e inventes tu mejor trago, o simplemente disfrutar de
            una manera clásica en cualquier lugar y con cualquier compañía.
          </p>
        </div>
      </section>
      <section id="about" className="my-24 bg-primary text-black">
        <ul className="flex h-28 justify-around items-center">
          <li>Producto 100% Artesanal</li>
          <li>Detalles que marcan la diferencia</li>
          <li>Botánicos para tus tragos</li>
          <li>Venta por mayor y menor</li>
        </ul>
      </section>
      <section id="showcase" className="flex flex-col items-center px-8 mb-20">
        <h2 className="text-4xl font-bold mb-20">PEDI TU BOX</h2>
        <div className="flex items-center justify-evenly gap-8">
          <div className="h-96 w-96 bg-black rounded-xl"></div>
          <div className="h-96 w-96 bg-black rounded-xl"></div>
          <div className="h-96 w-96 bg-black rounded-xl"></div>
        </div>
      </section>
    </>
  );
};

export default Landing;
