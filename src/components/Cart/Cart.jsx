import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import Checkout from '../Checkout/Checkout';

const Cart = () => {
  const { cart, clear, total } = useContext(CartContext);

  return (
    <>
      {
        cart.length !== 0 ?
          (
            <div className='container mb-3'>
              <div className='row d-flex'>
                <div className='col-md-6 col-12'>
                  <div className='mt-3'>
                    {cart.map((p) => <CartItem key={p.id} product={p} />)}
                  </div>
                  <h3 className='text-end'>TOTAL: $ {total}</h3>
                  <button className='w-100 btn' onClick={() => clear()} style={{ backgroundColor: '#e4c360' }}>Vaciar Carrito</button>
                </div>
                <div className='col-md-6 col-12 mt-3 bg-light rounded'>
                  <Checkout cart={cart} total={total} clear={clear} />
                </div>
              </div>
            </div>
          ) : (
            <div className='container'>
              <div className='m-3'>
                <h3>El carrito esta vacio</h3>
                <Link to='/wonder-botanics' className='btn' style={{ backgroundColor: '#e4c360' }}>Ir a la tienda</Link>
              </div>
            </div>
          )
      }
    </>
  );
}

export default Cart;