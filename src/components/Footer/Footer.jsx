import React from 'react';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='p-2 mt-auto' style={{ backgroundColor: '#e4c360' }}>
      <div className='row align-items-center'>
        <div className='col'>
          <a href='https://www.instagram.com/wonderbotanics/' className='btn'><BsInstagram /></a>
          <a href='https://api.whatsapp.com/message/EFOXJ5MVE2PEP1?autoload=1&app_absent=0' className='btn'><BsWhatsapp /></a>
        </div>
        <div className='col text-end me-3'>
          <p>Wonder Botanics &copy;2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;