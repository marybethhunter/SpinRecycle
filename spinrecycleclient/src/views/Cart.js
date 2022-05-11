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
`;

const Total = styled.div`
  display: flex;
  width: 200px;
  height: 65px;
  border: 5px solid black;
  border-radius: 10px;
  justify-content: center;
  align-content: center;
  background-color: #F9F6EE;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyCartTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 100px;
  border-radius: 10px;
  border: black 5px solid;
  background-color: #F9F6EE;
`;

export default function Cart() {
  const [records, setRecords] = useState([]);
  const [orderTotal, setOrderTotal] = useState();

  const getCartTotal = (records) => {
    let orderTotal = 0;
    records.forEach((record) => {
      orderTotal += record.price;
    });
    setOrderTotal(orderTotal.toFixed(2));
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
        <EmptyCartTextContainer>
          <h2>Your Cart is Empty!</h2>
        </EmptyCartTextContainer>
      ) : (
        <Container>
          <Total>
            <h3>Order Total: ${orderTotal}</h3>
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
