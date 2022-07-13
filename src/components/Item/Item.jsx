import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, title, price, thumbnail, content }) => {
  return (
    <div className='col-12 col-lg-4'>
      <div className='card shadow p-3 m-2 mb-3 bg-body rounded' style={{ border: 'none' }}>
        <img src={thumbnail} alt={title} className='card-img-top rounded' />
        <div className='card-body'>
          <h5 className='card-text' style={{ fontWeight: 700, textTransform: 'uppercase' }}>{title}</h5>
          <p>${price}</p>
        </div>
        <div className='card-footer d-flex align-items-end justify-content-end' style={{ border: 'none' }}>
          <div><Link to={`/coderhouse-reactjs/item/${id}`} className='btn' style={{ backgroundColor: '#e4c360' }}>Ver más</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Item;