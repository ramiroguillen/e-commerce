import React from "react";
import { BsSearch, BsChatSquare, BsPerson, BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

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
          <Link to={"/"}>
            <img
              src={require("../assets/logo-primary.png")}
              alt="Wonder Botanics Logo"
              className="h-28 w-20"
            />
          </Link>
        </div>

        <div className="w-3/6 flex">
          <input
            className="w-full h-10 p-3 rounded-xl text-black"
            placeholder="¿Qué estás buscando?"
          />
          <button className="h-9 w-9 flex justify-center items-center">
            <BsSearch />
          </button>
        </div>

        <div className="w-1/6 flex gap-3 justify-around">
          <p className="flex flex-col items-center">
            <BsChatSquare className="text-xl" />
            Ayuda
          </p>
          <Link to={"/account"} className="flex flex-col items-center">
            <BsPerson className="text-xl" />
            Cuenta
          </Link>
          <Link to={"/cart"} className="flex flex-col items-center">
            <BsCart3 className="text-xl" />
            Carrito
          </Link>
        </div>
      </nav>

      <ul
        id="navigation"
        className="h-14 px-52 flex justify-evenly items-center  bg-black text-white border-t-primary border-t"
      >
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/products"}>Productos</Link>
        </li>
        <li>
          <Link to={"/promos"}>Promociones</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contacto</Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
