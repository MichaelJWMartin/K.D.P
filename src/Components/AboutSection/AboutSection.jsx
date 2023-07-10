import React from 'react';
import styled, {keyframes} from 'styled-components';

const slideLeft = keyframes`
from { margin-left : -50vw; }
to { margin-left : 0; }
`

const slideRight = keyframes`
from { margin-right : -200vw; }
to { margin-right : 0; }
`

// const shake = keyframes`
//   10% {
//     transform: translateX(3px) rotate(2deg);
//   }

//   20% {
//     transform: translateX(-3px) rotate(-2deg);
//   }

//   30% {
//     transform: translateX(3px) rotate(2deg);
//   }

//   40% {
//     transform: translateX(-3px) rotate(-2deg);
//   }

//   50% {
//     transform: translateX(2px) rotate(1deg);
//   }

//   60% {
//     transform: translateX(-2px) rotate(-1deg);
//   }

//   70% {
//     transform: translateX(2px) rotate(1deg);
//   }

//   80% {
//     transform: translateX(-2px) rotate(-1deg);
//   }

//   90% {
//     transform: translateX(1px) rotate(0);
//   }

//   100% {
//     transform: translateX(-1px) rotate(0);
//   }
// `

const StyledSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: auto;
  align-items: start;
  text-align: left;
  padding-top: 2rem;
  animation: ${slideLeft} 1s;

  small {
    opacity: 0.8;
    font-weight: 300;
  }

  h1 {
    padding-top: 1.5em;
    // padding-left: 3rem;
    text-align: left;
    max-width: 430px;
    font-weight: 300;
  } 
  h2 {

  } 
  h3 {
    padding-bottom: 2em;
    // padding-left: 3rem;
    text-align: left;
    min-width: 400px;
    max-width: 430px;
    font-weight: 300;
  } 

  p {
    font-weight: 700;
    font-size: 1.3em;
  }
  
  @media (min-width: 768px) { 
  }
  
  @media (min-width: 992px) { 
    flex-direction: row;
    padding: 2rem 4rem 8rem 4rem;
  }
  
`

const StyledPicture = styled.img`
  margin: 30px auto 0 auto;
  background: grey;
  object-fit: cover;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  animation: ${slideRight} 1s;
  animation-iteration-count: 1;

  @media (min-width: 576px) { 
    min-width: 366px;
    min-height: 366px;
  }
`

const StyledContent = styled.div`

@media (min-width: 992px) {
  margin-right: 6rem;
}
`


export const AboutSection = ({data, picture }) => {
  const {aboutInfo, aboutInfoSub, aboutAlt} = data;
  return (
    <StyledSection>
      <StyledContent>
        <h1>
          {aboutInfo}
        </h1>
        <h3>
          {aboutInfoSub}
        </h3>
      </StyledContent>
      <StyledPicture src={picture} alt={aboutAlt}/>
        {/* <img src={picture} alt={aboutAlt}/>
      </StyledPicture> */}
    </StyledSection>
  );
}