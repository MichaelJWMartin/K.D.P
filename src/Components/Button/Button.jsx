import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div `
  align-items: center;
  border: 2px solid red;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`

const StyledIcon = styled.div `
  background: red;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`

export const Button = ({type, href, colour, anchor}) => {
  return (
    <StyledButton>
      {anchor ? <span><a href={`#${anchor}`}>hi</a></span> : <span>hi</span>}
    </StyledButton>
  )
}