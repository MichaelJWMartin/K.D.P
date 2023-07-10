import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;

img {
  padding: ${({sourceTwo}) => sourceTwo ? '1rem' : '1rem 0'}; //not working ???
  width: 100%;
}

@media (min-width: 1900px) { 
  flex-direction: row;
}
`

export const Image = ({source, alt, sourceTwo, altTwo}) => {
  // const {source, alt} = data
  return ( 
    <StyledImage>
      {source && <img src={source} alt={alt}/>}
      {sourceTwo && <img src={sourceTwo} alt={altTwo}/>}
    </StyledImage> 
  );
}