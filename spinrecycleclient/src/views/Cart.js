import React, { useState, useEffect } from 'react';
import { getCart } from '../data/cartData';
import CartCard from '../components/CartCard';

export default function Cart() {
    const [cart, setCart] = useState([])

    useEffect(() => {
        let isMounted = true;
        getCart().then((cartArray) => {
            if (isMounted) setCart(cartArray);
        });
        return () => {
            isMounted = false;
        };
    }, []);

  return (
    <div className='cart-page'>
        <h1 className='text-center'>Your Cart</h1>
        <div className='cart-container'>
            {cart.map((item) => (
                <CartCard key={item.key} cart={cart} setCart={setCart} />
            ))}
        </div>
    </div>
  )
}
