import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

const CartItem = ({ product }) => {
  const { removeProduct } = useContext(CartContext);

  const productTotalPrice = (product.price * product.amount);

  return (
    <div className='card mb-3' style={{ maxHeight: '200px', border: 'none' }}>
      <div className='row g-0'>
        <div className='col-4'>
          <img src={product.thumbnail} className='img-fluid rounded-start' style={{ height: '200px' }} alt={product.title} />
        </div>
        <div className='col-8'>
          <div className='card-body'>
            <Link className='card-title h5' to={`/wonder-botanics/item/${product.id}`} style={{ color: 'black', textDecoration: 'none', textTransform: 'uppercase' }}>{product.title}</Link>
            <p className='card-text'>Cantidad: {product.amount}</p>
            <p className='card-text'>Precio: ${productTotalPrice}</p>
            <button className='btn' onClick={() => removeProduct(product.id)} style={{ backgroundColor: '#e4c360' }}>Borrar producto</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
