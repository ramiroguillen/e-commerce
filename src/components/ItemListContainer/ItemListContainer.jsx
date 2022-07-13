import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useFireStore from '../../hooks/useFireStore';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = () => {
  const { category } = useParams();

  const { getData, products, load } = useFireStore();

  useEffect(() => {
    getData()
  }, []);

  return (
    <>
      {
        load ?
          <Spinner />
          : { category } ?
            <ItemList products={products} category={category} />
            : < ItemList data={products} />
      }
    </>
  )
}

export default ItemListContainer;