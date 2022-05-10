import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import Record from '../components/Record';
import { getCart } from '../data/cartData';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding-top: 10px;
`;

export default function Cart() {
    const [records, setRecords] = useState([])

    useEffect(() => {
        let isMounted = true;
        getCart().then((recordsArray) => {
            if (isMounted) setRecords(recordsArray);
        });
        return () => {
            isMounted = false;
        };
    }, [records]);

  return (
  <Content>
    {records.map((record) => (
      <Record key={record.recordId} record={record} />
    ))}
  </Content>
  )
}
