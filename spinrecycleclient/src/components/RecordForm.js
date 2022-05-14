import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button, Form, FormGroup, Label, Input,
} from "reactstrap";
import { addNewRecord, updateRecord } from "../data/recordData";
import styled from "styled-components";

const FormStyle = styled(Form)`
  background-color: #F9F6EE;
  border-radius: 10px;
  border: black 5px solid;
  height: 150px;
  width: 300px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const initialState = {
  title: '',
  artist: '',
  image: '',
  genre: '',
  price: ''
};

export default function RecordForm({ obj = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useNavigate();

  useEffect(() => {
    if (obj.recordId) {
      setFormInput({
        title: obj.title,
        artist: obj.artist,
        image: obj.image,
        genre: obj.genre,
        price: obj.price
      });
    }
  }, [obj]);

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (obj.recordId) {
      updateRecord(obj.recordId, formInput).then(() => {
        history("/shop");
      });
    } else {
      addNewRecord({ ...formInput }).then(() => {
        resetForm();
        history("/shop");
      });
    }
  };

  return (
    <Container>
      <FormStyle onSubmit={handleClick}>
        <FormGroup>
          <Label for="title">Record Title:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.title || ''}
            type="text"
            name="title"
            id="title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="artist">Artist:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.artist || ''}
            type="text"
            name="artist"
            id="artist"
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image Link:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.image || ''}
            type="text"
            name="image"
            id="image"
          />
        </FormGroup>
        <FormGroup>
          <Label for="genre">Genre:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.genre || ''}
            type="text"
            name="genre"
            id="genre"
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price:</Label>
          <Input
            onChange={(e) => handleChange(e)}
            value={formInput.price || ''}
            type="number"
            name="price"
            id="price"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </FormStyle>
    </Container>
  );
}
