import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @font-face {
      font-family: 'JW Johnnie BETA One';
      src: url('/fonts/JWJohnnieBETAOne-Regular.woff2') format('woff2'),
          url('/fonts/JWJohnnieBETAOne-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }


  body {
     font-family: "JW Johnnie BETA One", Helvetica, sans-serif;
     margin: 0;
     padding: 0;
     background: ${({ theme }) => theme.colors.primary};
     width: 1080px;
     height: 1920px;
   }
   a {
     color: inherit;
     text-decoration: none;
   }
  `;
