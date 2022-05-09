import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import CartCard from "../components/CartCard"
import { getCart } from '../data/cartData';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding-top: 10px;
  background-color: white;
`;

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
  <Content>
    {cart.map((item) => (
      <CartCard key={item.recordId} cart={cart} />
    ))}
  </Content>
  )
}
