import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';

import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link className='nav-link' to={'/wonder-botanics/cart'}>
      <div className='row'>
        <div className='col'><h3 style={{ color: 'black' }}><BsCart3 /></h3></div>
        <div className='col' style={{ marginLeft: -20, marginBottom: -30 }}><p>{cart.length}</p></div>
      </div>
    </Link>
  )
}

export default CartWidget;