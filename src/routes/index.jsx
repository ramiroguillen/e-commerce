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
                <Route path="/e-commerce" element={<ItemListContainer />} />
                <Route path="/e-commerce/item/:id" element={<ItemDetailContainer />} />
                <Route path="/e-commerce/category/:category" element={<ItemListContainer />} />
                <Route path="/e-commerce/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Rutas;
