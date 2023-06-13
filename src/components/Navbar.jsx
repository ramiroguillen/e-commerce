import React from "react";

const Navbar = () => {
  return (
    <section id="navbar">
      <div id="promo" className="flex justify-center bg-primary">
        <span className="text-black">15% OFF EN EFECTIVO!</span>
      </div>
      <nav
        id="search"
        className="h-36 px-8 flex items-center justify-between bg-black text-primary"
      >
        <div className="w-1/6">
          <img
            src={require("../assets/logo-primary.png")}
            alt="Wonder Botanics Logo"
            className="h-28 w-20"
          />
        </div>
        <div className="w-3/6">
          <input
            className="w-full h-9 p-3 rounded-xl text-black"
            placeholder="¿Qué estás buscando?"
          />
        </div>
        <div className="w-1/6 flex gap-3 justify-around">
          <p>Ayuda</p>
          <p>Cuenta</p>
          <p>Carrito</p>
        </div>
      </nav>
      <ul id="navigation" className="h-14 px-52 flex justify-evenly items-center  bg-black text-white border-t-primary border-t">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Promociones</li>
        <li>Info/Ayuda</li>
        <li>Preguntas Frecuentes</li>
        <li>Contacto</li>
      </ul>
    </section>
  );
};

export default Navbar;
