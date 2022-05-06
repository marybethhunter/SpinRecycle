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
  background-color: white;
`;

export default function Shop() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllRecords().then((recordsArray) => {
      if (isMounted) setRecords(recordsArray);
    });
  });

  return (
    <Content>
      {records.map((record) => (
        <Record key={record.recordId} record={record} />
      ))}
    </Content>
  );
}
