import React from 'react';

import Item from '../Item/Item';

const ItemList = ({ products, category }) => {
  const productsCategory = (products.filter((p) => p.category === category));

  return (
    <div className='container'>
      <div className='row justify-content-between'>
        {
          category ? productsCategory.map((p) => <Item key={p.id} id={p.id} title={p.title} price={p.price} thumbnail={p.thumbnail} content={p.content} />)
            : products.map((p) => <Item key={p.id} id={p.id} title={p.title} price={p.price} thumbnail={p.thumbnail} content={p.content} />)
        }
      </div>
    </div>
  );
}

export default ItemList;