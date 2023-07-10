import React from 'react';
import styled from 'styled-components';

const StyledRandom = styled.div`
  background: yellow;
  height: 100px;
  width: 100px;
`

export const Random = () => {
  return ( 
    <StyledRandom>
      <p>Random here</p>
    </StyledRandom> );
}