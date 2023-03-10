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
    --gray-800: #363636;
    --gray-900: #1a1d23;

    --red: #FF0000;
    --dark-red:  #CC0000;
    --blue: #3B4CCA;
    --light-blue: #5EBDFC;
    --yellow: #FFDE00;
    --gold: #B3A125;
    --green: #37796C;

    --shadow: 7px 6px 28px 3px rgba(0, 0, 0, 0.24);
    --light-shadow: 3px 2px 22px 3px rgba(0, 0, 0, 0.24)
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

  .light, .shiny {
    overflow: hidden;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      background-color: rgba(255,255,255, 0.3);
      height: 12.5rem;
      width: 3rem;
      left: -5rem;
      transform: skewX(-20deg);
    }

  }

  .shiny {
    &:before{
      animation: slide 1s infinite;
    }
  }

  .light {
    &:hover:before{
      animation: slide 1s;
    }
  }

  @keyframes slide {
    0%,100% {
      left: -5rem;
    }
    50% {
      left: 100%;
    }
  }
`;
