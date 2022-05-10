import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Record from "../components/Record";
import { getCart } from "../data/cartData";

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding-top: 10px;
  background-color: white;
`;

const Total = styled.div`
  display: flex;
  width: 200px;
  height: 25px;
  border: 1px solid black;
  border-radius: 5px;
  justify-content: center;
  align-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Cart() {
  const [records, setRecords] = useState([]);
  const [orderTotal, setOrderTotal] = useState();

  const getCartTotal = (records) => {
    let orderTotal = 0;
    records.forEach((record) => {
      orderTotal += record.price;
    });
    setOrderTotal(orderTotal);
  };

  useEffect(() => {
    let isMounted = true;
    getCart().then((recordsArray) => {
      if (isMounted) setRecords(recordsArray);
    });
    return () => {
      isMounted = false;
    };
  }, [records]);

  useEffect(() => {
    getCartTotal(records);
  }, [records]);

  return (
    <Content>
      {records.length === 0 ? (
        <h2>Your Cart is Empty!</h2>
      ) : (
        <Container>
          <Total>
            Order Total: {orderTotal}
          </Total>
          <Content>
          {records.map((record) => (
            <Record key={record.recordId} record={record} />
          ))}
          </Content>
        </Container>
      )}
    </Content>
  );
}
