import React from 'react';
import styled from 'styled-components'
import './LavaLamp.css'

const LavaLampContainer = styled.div`
  height: 0;
`

export const LavaLamp = ({children}) => {
  return ( 
    <LavaLampContainer>
      <div className="lava">
        <div>{children}</div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob top"></div>
        <div className="blob bottom"></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="plasma">
          <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    </LavaLampContainer>
  );
}
 