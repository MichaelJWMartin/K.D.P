import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFeature = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.darkBoxBackground};
  box-shadow: 5px 8px 9px -5px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  color: white;
  padding: 2.5rem;
  margin: 1rem auto;
  max-width: 980px;

  @media (min-width: 992px) { 
    flex-direction: row;
  }

  &:hover {
    scale: 1.01;
  }
`

const StyledImg = styled.div`
  height: 379px;
  background: white;
  margin: auto 0;
  min-width: 379px;
  aspect-ratio: 1/1;

  img {
    height: 100%;
    width: 100%;
  }


  @media (max-width: 492px) { 
    display: none;
  }

  @media (min-width: 992px) { 
    min-width: 561px;
    aspect-ratio: 16/9;
  }
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  h2 {
  }

  h3 {
    color: #FA0078;
    text-decoration: underline; 
  }

  p {
    height: 100%;
  }

  span {
    text-decoration: none;
  }

  i {
    font-weight: bold;
  }
  
  @media (min-width: 992px) { 
    h2 {
      margin-top: 0;
    }
  }
`

export const Feature = ({data, image}) => {
  const {heading, project, para, footer, path, alt} = data;
  return (
    <Link to={`/${path}`}>
      <StyledFeature>
        <StyledImg>
          <img src={image} alt={alt} />
        </StyledImg>
        <StyledContent>
          <h2>{heading}</h2>
          <h3>{project}</h3>
          <p>{para}</p>
          {/* <em> */}
            <span>{footer}</span>
          {/* </em> */}
        </StyledContent>
      </StyledFeature>
    </Link>
  );
}