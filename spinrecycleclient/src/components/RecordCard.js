import React from 'react';
import styled from 'styled-components';

const CardBody = styled.div`
  
`;

const AlbumCover = styled.img``;
const AlbumInfo = styled.div`
  display: flex;
`;

const Title = styled.div``;

function RecordCard(props) {
  return (
    <CardBody>
      <AlbumCover />

      Record
    </CardBody>
  )
}

RecordCard.propTypes = {}

export default RecordCard
