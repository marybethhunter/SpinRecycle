import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from "reactstrap";
import { addRecordToCart } from "../data/recordData";

const CardStyle = styled(Card)`
  border: 1px black solid;
  background-color: white;
  border-radius: 5px;
  width: 15rem;
  height: 15rem;
  margin: 10px;
  padding: 0px;
`;

const ButtonStyle = styled(Button)`
  border-radius: 5px;
  background-color: seafoam;
  width: 150px;
  height: 40px;
`;
export default function Record({ record }) {
  return (
    <CardStyle>
      <CardBody>
        <CardTitle tag="h5">{record.title}</CardTitle>
        <CardText>{record.artist}</CardText>
        <CardText>{record.price}</CardText>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {record.genre}
        </CardSubtitle>
        <ButtonStyle onClick={() => addRecordToCart(record.recordId)}>Add To Cart</ButtonStyle>
      </CardBody>
    </CardStyle>
  );
}

Record.propTypes = {
  record: PropTypes.shape({
    artist: PropTypes.string,
    recordId: PropTypes.number,
    genre: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
