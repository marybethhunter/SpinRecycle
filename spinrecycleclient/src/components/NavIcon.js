import React from 'react'
import styled from 'styled-components'
import recordLogo from '../images/RecordLogo.png'
import PropTypes from 'prop-types';

const RecordIcon = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export default function NavIcon({expanded, setExpanded}) {
  const recordClick = () => {
    setExpanded(!expanded);
  }

  return (
    <RecordIcon src={recordLogo} onClick={recordClick} className={expanded ? "navIcon-expanded" : "navIcon-hidden"} />
  )
}

NavIcon.propTypes = {
  expanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired
}