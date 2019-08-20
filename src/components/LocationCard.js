import React from "react";
import styled from 'styled-components';

const LocationDiv = styled.div`
  width: 45%;
  margin: 20px;
  border: 1px solid lightgrey;
`;

export default function LocationCard (props) {
  let location = props.location;
  return (
      <LocationDiv>
        <h3>{location.name}</h3>
        <ul>
          <li>Type: {location.type}</li>
          <li>Dimension: {location.dimension}</li>          
        </ul>
      </LocationDiv>
  );
}
