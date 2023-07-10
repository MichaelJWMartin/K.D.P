import React from 'react';
import styled from 'styled-components';

const StyledBasicInfo = styled.div `
  max-width: 900px;
  margin: auto;
  padding: 0 3rem;
`

const StyledHeading = styled.h2 `

`

const StyledPara = styled.p `

`

export const BasicInfo = ({data}) => {
  const {heading, para} = data
  return ( 
    <StyledBasicInfo>
      <StyledHeading>{heading}</StyledHeading>
      <StyledPara>{para}</StyledPara>
    </StyledBasicInfo>
    );
}