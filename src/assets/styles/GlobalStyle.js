import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Inter', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  }

  *,*::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    font-family: 'Inter', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: "slnt" 0;
    font-size: 1.6rem;
    margin: 0;
     
  }
`;

export default GlobalStyle;
