import React, {useState} from 'react'
import styled from 'styled-components'
import recordLogo from '../images/RecordLogo.png'

const RecordIcon = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export default function NavIcon() {
  const [expanded, setExpanded] = useState(true);

  const recordClick = () => {
    setExpanded(!expanded);
    console.log("record click");
  }

  return (
    <RecordIcon src={recordLogo} onClick={recordClick} className={expanded ? "navIcon-expanded" : "navIcon-hidden"} />
  )
}
