import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Button,
} from 'reactstrap';

//unstyled basic record card component
export default function Record({ record }) {
  return (
    <Card>
    <CardImg
      alt={record.Title}
      src={record.Image}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {record.Title}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {record.Price}
      </CardSubtitle>
      <Button>
        Add To Cart
      </Button>
    </CardBody>
  </Card>
  )
}

Record.propTypes = {
  record: PropTypes.shape({
    RecordId: PropTypes.number,
    Title: PropTypes.string,
    ArtistId: PropTypes.number,
    GenreId: PropTypes.number,
    Image: PropTypes.string,
    Price: PropTypes.number
  }).isRequired,
};
