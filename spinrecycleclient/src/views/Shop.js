import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Record from "../components/Record";
import { getAllRecords } from "../data/recordData";

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding-top: 10px;
`;

export default function Shop() {
  const [records, setRecords] = useState([]);
  const [inShop] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getAllRecords().then((recordsArray) => {
      if (isMounted) setRecords(recordsArray);
    });
  });

  return (
    <Content>
      {records.map((record) => (
        <Record key={record.recordId} record={record} inShop={inShop} />
      ))}
    </Content>
  );
}
