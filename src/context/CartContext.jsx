import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addProduct = (product, amount) => {
        let productAmount = { ...product, amount };
        if (!isInCart(product.id)) {
            setCart([...cart, productAmount]);
        } else {
            let result = cart.find(() => (productAmount.id) === product.id);
            result.amount = (result.amount + amount);
        };
        setTotal(total + amount * product.price);
    };

    const removeProduct = (id) => {
        let result = cart.filter((e) => e.id !== id);
        setCart(result);
        let product = cart.find((e) => e.id === id);
        setTotal(total - product.amount * product.price);
    };

    const clear = () => {
        setCart([]);
        setTotal(0);
    };

    const isInCart = (id) => {
        return cart.some((e) => e.id === id);
    };

    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct, clear, isInCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;