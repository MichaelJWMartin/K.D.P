import React from 'react';
import styled, {keyframes} from 'styled-components';

const slideRight = keyframes`
from { margin-right : -200vw; }
to { margin-right : 0; }
`

const StyledHero = styled.div`
  background-color: ${props => props.lava ? '' : 'theme.darkBackground'};
  justify-content: center;
  align-content: center;
  max-height: 80vh;
  animation: ${slideRight} 1s;

  small {
    opacity: 0.8;
    font-weight: 300;
  }

  h1 {
    margin: auto;
    display: flex;
    max-width: 1080px;
    font-family: Lato;
    font-size: 75px;
    font-weight: 700;
    letter-spacing: 0em;
    text-transform: uppercase;
  } 
  h3 {
    margin: auto;
    max-width: 1080px;
    font-family: Lato;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0em;
    text-transform: uppercase;
    text-align: center;
  } 

  p {
    font-weight: 700;
    font-size: 1.3em;
  }
  
  @media (min-width: 496px) { 
    h1 {
      font-size: 128px;
    }
    h3 {
      font-size: 20px;
    }
  }
  
  @media (min-width: 768px) { 
    
  }
  
  @media (min-width: 992px) { 
    
  }
`

const StyledText = styled.div `
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 35vh 2rem;
`


const StyledVideo = styled.video `
  max-height: ${props => props.fullHeight ? '100vh' : '80vh'};
`

export const Hero = ({ heroInfo, heroInfoTwo, image, lava, video, fullHeight }) => {
  return (
    <StyledHero fullHeight={fullHeight} lava={lava}>
      {video && 
        <StyledVideo muted autoPlay width='100%' loop playsinline oncanplay="this.muted=true" fullHeight={fullHeight}>
          <source src={video} type="video/mp4"/>
        </StyledVideo> 
      }
      {image && !lava && <img src={image} alt='hero-banner' />}
      {heroInfo &&
        <StyledText>
          <h1>
            {heroInfo}
          </h1>
          <h3>
            {heroInfoTwo}
          </h3>
        </StyledText>
      }
    </StyledHero>
  );
}