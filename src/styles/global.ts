import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gray-50: #f8f8f8;
    --gray-100: #d7d7d7;
    --gray-200: #bbbbbb;
    --gray-600: #808080;
    --gray-900: #1a1d23;

    --red: #FF0000;
    --dark-red:  #CC0000;
    --blue: #3B4CCA;
    --light-blue: #5EBDFC;
    --yellow: #FFDE00;
    --gold: #B3A125;
    --green: #37796C;
  }

  html {
    scroll-behavior: smooth;
  }

  body, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  body {
    background: var(--gray-100);
    color: var(--gray-900);
    min-height: 100vh;
  }

  button {
    cursor: pointer;
    background: none;
    border: 0;
    outline: none;
  }

  @media (max-width: 1080px){
    html {
      font-size: 93.75%; //15px
    }
  }

  @media (max-width: 720px){
    html {
      font-size: 87.5%; //14px
    }
  }
`;
