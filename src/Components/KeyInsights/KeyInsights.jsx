import React from 'react';
import styled from 'styled-components';

const StyledKeyInsights = styled.div `
  max-width: 900px;
  margin: auto;
  padding: 0 3rem;
`

const StyledTitle = styled.h3 `

`

const StyledList = styled.ul `

`

export const KeyInsights = ({data}) => {
  const {title, bulletOne, bulletTwo, bulletThree, bulletFour } = data
  return (
  <StyledKeyInsights>
    <StyledTitle>{title}</StyledTitle>
    <StyledList>
      <li>{bulletOne}</li>
      <li>{bulletTwo}</li>
      <li>{bulletThree}</li>
      <li>{bulletFour}</li>
    </StyledList>
  </StyledKeyInsights>)
}