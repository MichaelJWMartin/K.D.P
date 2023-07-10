import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 0 3rem;
`

const StyledHeading = styled.h3`
  max-width: 530px;
`

const StyledPara = styled.p`

`

const StyledOrderedList = styled.ol`
  padding-left: 0;
  li {
    margin-bottom: 0;
    font-weight: bold;
  }
  p {
    margin-top: 0;
  }
`

const StyledUnorderedList = styled.ul`
  padding-left: 0;
`

const StyledImage = styled.img`
  width: ${props => props.imageTwo ? '50%' : '100%'};
  padding: 1rem;
  margin-bottom: 2rem;
`

export const InformationStep = ({data, orderedList, }) => {
  const {
    heading, 
    paraOne, 
    paraTwo, 
    bulletOne, 
    bulletOneInfo,
    bulletTwo, 
    bulletTwoInfo,
    bulletThree, 
    bulletThreeInfo,
    bulletFour, 
    bulletFourInfo,
    bulletFive, 
    bulletFiveInfo,
    paraThree, 
    image, 
    alt, 
    imageTwo, 
    altTwo
  } = data
  return (
    <StyledInfo>
      {heading && 
        <StyledHeading>
          {heading}
        </StyledHeading>
      }
      {paraOne && 
        <StyledPara>
          {paraOne}
        </StyledPara>
      }   
      {paraTwo && 
        <StyledPara>
          {paraTwo}
        </StyledPara>
      }
      {orderedList ? 
        <StyledOrderedList>
          {bulletOne && <li>{bulletOne}</li>}
          {bulletOneInfo && <p>{bulletOneInfo}</p>}
          {bulletTwo && <li>{bulletTwo}</li>}
          {bulletTwoInfo && <p>{bulletTwoInfo}</p>}
          {bulletThree && <li>{bulletThree}</li>}
          {bulletThreeInfo && <p>{bulletThreeInfo}</p>}
          {bulletFour && <li>{bulletFour}</li>}
          {bulletFourInfo && <p>{bulletOneInfo}</p>}
          {bulletFive && <li>{bulletFive}</li>}
          {bulletFiveInfo && <p>{bulletFiveInfo}</p>}
        </StyledOrderedList> 
      :
        <StyledUnorderedList>
        {bulletOne && <li>{bulletOne}</li>}
        {bulletTwo && <li>{bulletTwo}</li>}
        {bulletThree && <li>{bulletThree}</li>}
        {bulletFour && <li>{bulletFour}</li>}
        {bulletFive && <li>{bulletFive}</li>}
        </StyledUnorderedList>
      }
      {paraThree && 
        <StyledPara>
          {paraThree}
        </StyledPara>
      }
      {image && <StyledImage alt={alt} src={image}/>}
      {imageTwo && <StyledImage alt={altTwo} src={imageTwo}/>}
    </StyledInfo>
  )
}