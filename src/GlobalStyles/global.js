import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
      -ms-overflow-style: none; 
      scrollbar-width: none; 
      overflow-y: scroll; 
  }
  
  body::-webkit-scrollbar {
      display: none; 
  }


  *, *::after, *::before {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    display: flex;
    color: ${({ theme }) => theme.primaryDark};
    text-rendering: optimizeLegibility;
    font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .header {
    width: 100vw;
    height: calc(100vh - 76px);
  }

  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }

  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }

  .wrapper {
    height: 100vh;  
    width: 100%;   
  }

  .gradient_bg {
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    aspect-ratio: 1 / 1;
    mix-blend-mode: hue;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .blur-load {
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: -2;
    aspect-ratio: 1 / 1;
    mix-blend-mode: hue;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  .blur-load.loaded > img {
    opacity: 1;
  }
  
  .blur-load.loaded {
    opacity: 0;
  }
`