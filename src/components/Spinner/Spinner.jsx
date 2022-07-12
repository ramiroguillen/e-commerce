import React from 'react';

const Spinner = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ color: '#e4c360' }}>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;