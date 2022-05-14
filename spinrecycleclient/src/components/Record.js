import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { addRecordToCart } from "../data/recordData";
import { deleteCartItem } from "../data/cartData";

const CardStyle = styled(Card)`
  background-color: #F9F6EE;
  border-radius: 10px;
  border: black 5px solid;
  margin: 20px;
  padding: 0px;
`;

const ButtonStyle = styled(Button)`
  border-radius: 5px;
  background-color: #F9F6EE;
  width: 150px;
  height: 40px;
  margin-bottom: 10px;
  border: 2px solid black;
  box-shadow: 1px 1px 1px;
`;
export default function Record({ record, inShop, setHeaderText }) {
  const history = useNavigate();
  return (
    <CardStyle>
      <CardBody>
        <CardImg
          style={{ width: "300px", height: "300px" }}
          src={record.image}
          alt={record.title}
        />
        <CardTitle tag="h2">{record.title}</CardTitle>
        <CardText tag="h4">{record.artist}</CardText>
        <CardText tag="h4">${record.price}</CardText>
        <CardSubtitle tag="h5">{record.genre}</CardSubtitle>
        {inShop && (
          <ButtonStyle
            className="add-to-cart-btn"
            onClick={() => {
              addRecordToCart(record.recordId);
              history("/cart");
              setHeaderText("Cart");
            }}
          >
            Add To Cart
          </ButtonStyle>
        )}
        {!inShop && (
          <ButtonStyle
            className="delete-from-cart-btn"
            onClick={() =>
              deleteCartItem(record.recordId)
            }
          >
            Delete From Cart
          </ButtonStyle>
        )}
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
    image: PropTypes.string,
  }).isRequired,
  setHeaderText: PropTypes.func
};

Record.defaultProps = {
  setHeaderText: () => {}
}
