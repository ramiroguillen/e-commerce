import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="bg-primary">
      <div className="flex px-8 justify-between pt-12">
        <div className="w-1/3 mb-6">
          <h2 className="text-xl font-bold mb-6">Categorías</h2>
          <ul>
            <li className="py-1">Inicio</li>
            <li className="py-1">Productos</li>
            <li className="py-1">Promociones</li>
            <li className="py-1">Info/Ayuda</li>
            <li className="py-1">Preguntas Frecuentes</li>
            <li className="py-1">Contacto</li>
          </ul>
        </div>

        <div className="w-1/3">
          <h2 className="text-xl font-bold mb-6">Contactános</h2>
          <ul>
            <li className="py-1">WhatsApp</li>
            <li className="py-1">Teléfono</li>
            <li className="py-1">Mail</li>
            <li className="py-1">Dirección</li>
          </ul>
        </div>

        <div className="w-1/3">
          <h2 className="text-xl font-bold mb-6">Síguenos en nuestras redes</h2>
          <ul className="flex">
            <li className="py-1">Instagram</li>
          </ul>
        </div>
      </div>

      <div className="flex px-8 h-14">
        <h2 className="w-1/4 text-xl font-bold">Medios de pago</h2>
        <ul className="w-2/4 flex justify-start">
          <li className="px-1">Mercado Pago</li>
          <li className="px-1">Transferencia</li>
          <li className="px-1">Efectivo</li>
        </ul>
      </div>

      <div className="h-14 flex items-center px-8 bg-black text-white text-sm">
        Copyright Wonder Botanics - 2023. Todos los derechos reservados.
      </div>
    </section>
  );
};

export default Footer;
