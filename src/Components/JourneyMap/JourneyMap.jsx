import React from 'react';
import styled from 'styled-components';

const StyledJourneyMap = styled.div `
  max-width: 900px;
  margin: auto;
  padding: 0 3rem;
`

const StyledHeading = styled.h2 `

`

const StyledPara = styled.p `

`

const StyledSubheading = styled.h3 `

`

const StyledList = styled.ol `
  padding-left: 0;

  li {
    padding-bottom: 1rem;
  }
`
const StyledImg = styled.img `

`
const StyledBold = styled.span `
  font-weight: 700;
`

export const JourneyMap = ({data}) => {
  const {heading, paraOne, paraTwo, paraThree, subHeadingOne, subHeadingTwo, bulletTopicOne, bulletTopicTwo, bulletTopicThree, bulletTopicFour, imageSource, alt, bulletTitleOne, bulletTitleTwo, bulletTitleThree, bulletTitleFour} = data;
  return (
    <StyledJourneyMap>
      <StyledHeading>{heading}</StyledHeading>
      <StyledPara>{paraOne}</StyledPara>
      <StyledPara>{paraTwo}</StyledPara>
      <StyledSubheading>{subHeadingOne}</StyledSubheading>
      <StyledList>
        <li><StyledBold>{bulletTitleOne}</StyledBold>{bulletTopicOne}</li>
        <li><StyledBold>{bulletTitleTwo}</StyledBold>{bulletTopicTwo}</li>
      </StyledList>
      <StyledSubheading>{subHeadingTwo}</StyledSubheading>
      <StyledList>
        <li><StyledBold>{bulletTitleThree}</StyledBold>{bulletTopicThree}</li>
        <li><StyledBold>{bulletTitleFour}</StyledBold>{bulletTopicFour}</li>
      </StyledList>
      <StyledPara>{paraThree}</StyledPara>
      <StyledImg src={imageSource} alt={alt}/>
    </StyledJourneyMap>
  )
}