import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from "reactstrap";

const CardStyle = styled(Card)`
  border: 1px black solid;
  background-color: white;
  border-radius: 5px;
  width: 16rem;
  height: 16rem;
`;

const handleClick = () => {
  //add record by record id to the cart
};
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
        <Button onClick={handleClick}>Add To Cart</Button>
      </CardBody>
    </CardStyle>
  );
}

Record.propTypes = {
  record: PropTypes.shape({
    artist: PropTypes.string,
    id: PropTypes.number,
    genre: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
