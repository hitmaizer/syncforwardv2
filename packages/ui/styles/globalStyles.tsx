'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  [data-color-scheme="dark"], .theme--dark {
    color-scheme: dark;
  }

  [data-color-scheme="light"], .theme--light {
    color-scheme: light;
  }

  body#removeScroll {
    padding: 0;
  }

  body {
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.fonts.main};

    background-color: ${({ theme }) => theme.colors.background.main};

    overflow-x: hidden;

    /* Smoothing */
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  font-smoothing: antialiased;
  }

  html {
    /* Adjust font size */
    font-size: 100%;
    -webkit-text-size-adjust: 100%;

    -webkit-font-feature-settings: 'kern' on, 'liga' on, 'calt' on, 'zero' on;
    font-feature-settings: 'kern' on, 'liga' on, 'calt' on, 'zero' on,
      contextual common-ligatures, 'kern', contextual common-ligatures, 'kern';
    font-variant-ligatures: contextual common-ligatures;
    -webkit-font-kerning: normal;
    font-kerning: normal;
  }

  * {
    box-sizing: border-box;
  }

  @supports (font-variation-settings: normal) {
    html {
      font-family: "Space Grotesk", sans-serif;
    }
  }

  a,
  button {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.fonts.main};
    border: none;
  }

  a {
    text-decoration: none;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.inverse};
  }

  
`;

export default GlobalStyle;
