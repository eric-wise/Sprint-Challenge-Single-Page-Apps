import React from 'react';
import styled from 'styled-components';

const EpisodeDiv = styled.div`
    width: 45%;
    margin: 20px;
    border: 1px solid lightgrey;
`;

export default function EpisodeCard(props) {
  let episode = props.episode;

  return (
      <EpisodeDiv>
        <h3>Name: {episode.name}</h3>
        <ul>
          <li>Episode: {episode.episode}</li>
          <li>Date Aired: {episode.air_date}</li>
        </ul>
      </EpisodeDiv>
  );
}