import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BoxContentList from '../BoxContentList/BoxContentList';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
  const [amount, setAmount] = useState(0);

  const add = (amount) => { setAmount(amount) };

  return (
    <div className='container justify-content-center'>
      <div className='card m-3 me-100ß'>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img src={product.thumbnail} className='img-fluid rounded-start' alt={product.title} />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title h2' style={{ fontWeight: 700, textTransform: 'uppercase' }}>{product.title}</h5>
              {product.content &&
                <>
                  <h5 className='card-text'>Contenido:</h5>
                  <BoxContentList content={product.content} />
                </>
              }
              <h5 className='card-title mb-3'>Precio: ${product.price}</h5>
              <ItemCount product={product} nombre={product.name} stock={product.stock} initial={1} amountToAdd={add} price={product.price} />
            </div>
            {
              amount > 0 &&
              <div className='row mt-3 p-3'>
                <div className='col-12'>
                  <Link to="/coderhouse-reactjs/cart" className='btn w-100' style={{ backgroundColor: '#e4c360' }}>Finalizar compra</Link>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;