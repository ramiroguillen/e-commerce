import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Navbar from '../components/Navbar/Navbar';
import Cart from '../components/Cart/Cart';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Footer from '../components/Footer/Footer';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/coderhouse-reactjs" element={<ItemListContainer />} />
                <Route path="/coderhouse-reactjs/item/:id" element={<ItemDetailContainer />} />
                <Route path="/coderhouse-reactjs/category/:category" element={<ItemListContainer />} />
                <Route path="/coderhouse-reactjs/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Rutas;