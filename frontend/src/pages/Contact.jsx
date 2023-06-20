import React from "react";
import {
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="px-16 py-8">
      <h2 className="text-3xl font-bold mb-3">Contacto</h2>
      <div className="flex gap-24">
        <div className="w-1/3">
          <p className="mb-3">
            Sacate todas tus dudas! Escribinos por whatsapp!
          </p>
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
        <div className="w-2/3">
          <form className="flex flex-col">
            <label className="text-sm pb-2">Nombre</label>
            <input className="w-full h-10 p-3 border border-black rounded-xl text-black border-opacity-50" />
            <label className="text-sm py-2">Email</label>
            <input className="w-full h-10 p-3 border border-black rounded-xl text-black border-opacity-50" />
            <label className="text-sm py-2">Teléfono</label>
            <input className="w-full h-10 p-3 border border-black rounded-xl text-black border-opacity-50" />
            <label className="text-sm py-2">Mensaje</label>
            <textarea className="w-full h-48 p-3 border border-black rounded-xl text-black border-opacity-50" />
            <button type="submit" className="bg-primary rounded-3xl w-full mt-3 h-10 font-bold">ENVIAR</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
