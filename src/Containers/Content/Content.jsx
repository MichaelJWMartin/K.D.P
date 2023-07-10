import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.lightBackground};
  width: 100vw;
  max-height: 100%;
  margin: auto;
`

export const Content = ({children}) => {
  return <StyledContent>
    {children}
  </StyledContent>;
}