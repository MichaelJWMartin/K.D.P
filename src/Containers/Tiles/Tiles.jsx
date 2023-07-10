import React from 'react';
import styled from 'styled-components';
import { Tile } from '../../Components';

const StyledTiles = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
    justify-content: center;
`

export const Tiles = () => {
  return (
    <StyledTiles>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </StyledTiles>);
}