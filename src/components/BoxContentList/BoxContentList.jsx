import React from 'react';

import BoxContent from '../BoxContent/BoxContent';

const BoxContentList = ({ content }) => {
  return (
    <div className='mb-3'>
      {content && content.map((e, index) => <BoxContent content={e} key={e} />)}
    </div>
  );
}

export default BoxContentList;