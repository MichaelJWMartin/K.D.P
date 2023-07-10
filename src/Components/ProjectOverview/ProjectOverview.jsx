import React from 'react';
import styled from 'styled-components';

const StyledOverview = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 0 3rem;
`

const StyledSubheading = styled.h3`
  color: ${({theme}) => theme.pink};
  margin: 0;
  min-width: 100%;
`

const StyledSteps = styled.ul`
  color: ${({theme}) => theme.pink};
  list-style-type: none;
  padding-left: 0;
  font-weight: 700;

  a {
    text-decoration: none;
    color: ${({theme}) => theme.pink};

    :hover {
      text-decoration: underline;
    }

  }

`

const StyledHeading = styled.h1`
  max-width: 530px;
  font-size: 40px;
  font-weight: 700;
`

const StyledImage = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`

export const ProjectOverview = ({data, image, reverse }) => {
  const {heading, subHeading, para, bulletOne, bulletTwo, bulletThree, alt, anchorOne, anchorTwo, anchorThree, anchorId} = data
  return (
    <StyledOverview>
      {heading && <StyledHeading>{heading}</StyledHeading>}
      {reverse ? 
        <>
          {para && <p>{para}</p>}
          {subHeading && <StyledSubheading>{subHeading}</StyledSubheading>}
        </>
        :
        <>
          {subHeading && <StyledSubheading id={anchorId}>{subHeading}</StyledSubheading>}
          {para && <p>{para}</p>}
        </>
      }
      {bulletOne && bulletTwo && bulletThree && <StyledSteps>
        <li><a href={`#${anchorOne}`}>{bulletOne}</a></li>
        <li><a href={`#${anchorTwo}`}>{bulletTwo}</a></li>
        <li><a href={`#${anchorThree}`}>{bulletThree}</a></li>
      </StyledSteps>}
      {image && <StyledImage alt={alt} src={image}/>}
    </StyledOverview>
  )
}