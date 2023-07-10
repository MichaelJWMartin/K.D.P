import React from 'react';
import styled from 'styled-components';

const StyledDesktopCard = styled.div`
  width: 20rem;
  height: 10rem;
  background-color: red;
  margin: 10px;
`

export const DesktopCard = ({desktopImg}) => {
  return ( 
    <StyledDesktopCard>
      {/* add link or anchor href */}
      <img src={desktopImg} alt='desktop-example' />
    </StyledDesktopCard> 
  );
}
 
