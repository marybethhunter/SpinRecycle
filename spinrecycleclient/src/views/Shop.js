import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Record from "../components/Record";
import { getAllRecords } from "../data/recordData";
import PropTypes from "prop-types";

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
`;

export default function Shop({setHeaderText}) {
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
        <Record key={record.recordId} record={record} inShop={inShop} setHeaderText={setHeaderText} />
      ))}
    </Content>
  );
}

Shop.propTypes = {
  setHeaderText: PropTypes.func.isRequired,
};