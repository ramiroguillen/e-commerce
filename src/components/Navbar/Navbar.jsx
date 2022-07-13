import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light' style={{ backgroundColor: '#e4c360' }}>
      <div className='container-fluid'>
        <Link className='navbar-brand ms-3' to={'/coderhouse-reactjs'}>
          <div className='row align-items-center'>
            <div className='col'>
              <img src={logo} alt='logo' width={64} height={80} />
            </div>
            <div className='col'>
              <h1 style={{ fontWeight: 700 }}>Wonder Botanics</h1>
            </div>
          </div>
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className='nav-item'><Link className='nav-link' to={'/coderhouse-reactjs/category/mayorista'}>Mayoristas</Link></li>
          <li className='nav-item'><Link className='nav-link' to={'/coderhouse-reactjs/category/minorista'}>Minoristas</Link></li>
        </ul>
        <ul className='navbar-nav me-3 mb-2 mb-lg-0'>
          <li className='nav-item'><CartWidget /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar