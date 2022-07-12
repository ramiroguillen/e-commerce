import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import useFireStore from '../../hooks/useFireStore';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { getSelected, selectedItem, load } = useFireStore();

  useEffect(() => {
    getSelected({ id });
  },[]);
  
  return (
    <>{load ? <Spinner /> : <ItemDetail product={selectedItem} />}</>
  );
}

export default ItemDetailContainer;