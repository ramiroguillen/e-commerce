import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useFireStore from '../../hooks/useFireStore';

const Checkout = ({ cart, total, clear }) => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    buyer: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      address: '',
      location: '',
      province: ''
    },
    items: cart,
    total: total
  });

  const { generateOrder, load } = useFireStore();

  const handleChange = (e) => {
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [e.target.name]: e.target.value
      },
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateOrder({ data: form });
    navigate("/");
    clear();
  };

  return (
    <>
      <h2 className='mt-3 border-bottom'>Completa el formulario</h2>
      <form onSubmit={handleSubmit}>
        <div className='row mt-3'>
          <div className='col-6'>
            <label className='form-label'>Nombre</label>
            <input onChange={handleChange} name='name' value={form.buyer.name} type="text" className='form-control' />
          </div>
          <div className='col-6'>
            <label className='form-label'>Apellido</label>
            <input onChange={handleChange} name='surname' value={form.buyer.surname} type="text" className='form-control' />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <label className='form-label'>Telefono</label>
            <input onChange={handleChange} name='phone' value={form.buyer.phone} type="number" className='form-control' />
          </div>
          <div className='col-6'>
            <label className='form-label'>Email</label>
            <input onChange={handleChange} name='email' value={form.buyer.email} type="email" className='form-control' />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <label className='form-label'>Domicilio</label>
            <input onChange={handleChange} name='address' value={form.buyer.address} type="text" className='form-control' />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <label className='form-label'>Localidad</label>
            <input onChange={handleChange} name='location' value={form.buyer.location} type="text" className='form-control' />
          </div>
          <div className='col-6'>
            <label className='form-label'>Provincia</label>
            <input onChange={handleChange} name='province' value={form.buyer.province} type="text" className='form-control' />
          </div>
        </div>
        <br />
        {load ?
          <button disabled={true} className='btn btn-primary w-100 mb-3' style={{ backgroundColor: '#e4c360' }}>Realizando Pedido</button>
          : <button disabled={!form.buyer.name || !form.buyer.surname || !form.buyer.phone || !form.buyer.email || !form.buyer.address || !form.buyer.location || !form.buyer.province} type="submit" className='btn w-100 mb-3' style={{ backgroundColor: '#e4c360' }}>Finalizar Compra</button>
          }
      </form>
    </>
  );
}

export default Checkout;