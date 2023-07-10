import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
  display: flex;
  min-width: 490px;
  min-height: 490px;
  background: ${({ theme }) => theme.darkBoxBackground};
  margin: 2rem;
  box-shadow: 5px 8px 9px -5px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  padding: 2rem;
`

export const Tile = () => {
  return (
    <StyledTile>Hello</StyledTile>
  );
}