import React from 'react';
import styled from 'styled-components';

const StyledMobileCard =styled.div`
  width: 7rem;
  height: 10rem;
  background-color: red;
  margin: 10px;
`

export const MobileCard = ({mobileImg}) => {
  return ( 
    <StyledMobileCard>
      {/* add link or anchor href */}
      <img src={mobileImg} alt='phone-example' />
    </StyledMobileCard>
  );
}
 
