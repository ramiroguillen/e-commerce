import React, { useState, useContext } from 'react';

import { CartContext } from '../../context/CartContext';

const ItemCount = ({ product, stock, initial, amountToAdd }) => {

  const [amount, setAmount] = useState(initial);

  const { addProduct } = useContext(CartContext);

  function onAdd(button) {
    ((button === '1') && (amount < stock)) ? setAmount(amount + 1) : ((button === '-1') && (amount > initial)) ? setAmount(amount - 1) : setAmount(amount);
  };

  const add = () => {
    amountToAdd(amount);
    addProduct(product, amount);
  };

  return (
    <div className='container'>
      <div className='row justify-content-center justify-content-md-start mb-2'>
        <div className='col-2'>
          <button onClick={() => onAdd('-1')} className='btn w-100' style={{ backgroundColor: '#e4c360', fontWeight: 700 }}>-</button>
        </div>
        <div className='col-2 border border-secondary rounded'>
          <h4 className='text-center'>{amount}</h4>
        </div>
        <div className='col-2'>
          <button onClick={() => onAdd('1')} className='btn w-100' style={{ backgroundColor: '#e4c360', fontWeight: 700 }}>+</button>
        </div>
      </div>
      <div className='row justify-content-center justify-content-md-start'>
        <div className='col-12 col-md-6' >
          <button className='btn w-100' onClick={() => add(product, amount)} style={{ backgroundColor: '#e4c360' }}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;