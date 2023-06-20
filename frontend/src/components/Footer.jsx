import React from "react";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section id="footer" className="bg-primary">
      <div className="flex px-8 justify-between py-12">
        <div className="w-1/3 mb-6">
          <h2 className="text-xl font-bold mb-6">Categorías</h2>
          <ul>
            <li className="py-1">
              <Link to={"/"}>Inicio</Link>
            </li>
            <li className="py-1">
              <Link to={"/products"}>Productos</Link>
            </li>
            <li className="py-1">
              <Link to={"/promos"}>Promociones</Link>
            </li>
            <li className="py-1">
              <Link to={"/contact"}>Contacto</Link>
            </li>
          </ul>
        </div>

        <div className="w-1/3">
          <h2 className="text-xl font-bold mb-6">Contactános</h2>
          <ul>
            <li className="py-1 flex items-center gap-2">
              <AiOutlineWhatsApp />
              WhatsApp
            </li>
            <li className="py-1 flex items-center gap-2">
              <AiOutlinePhone />
              Teléfono
            </li>
            <li className="py-1 flex items-center gap-2">
              <AiOutlineMail />
              contacto@wonderbotanics.com.ar
            </li>
            <li className="py-1 flex items-center gap-2">
              <MdOutlineLocationOn />
              Dirección
            </li>
          </ul>
        </div>

        <div className="w-1/3">
          <h2 className="text-xl font-bold mb-6">Síguenos en nuestras redes</h2>
          <ul className="flex">
            <li className="py-1 flex items-center gap-2">
              <AiOutlineInstagram />
              @wonderbotanics
            </li>
          </ul>
        </div>
      </div>

      <div className="h-14 flex items-center px-8 bg-black text-white text-sm">
        Copyright Wonder Botanics - 2023. Todos los derechos reservados.
      </div>
    </section>
  );
};

export default Footer;
