import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Mont Heavy';
    src: url('Mont-HeavyDEMO.woff2') format('woff2'),
        url('Mont-HeavyDEMO.woff') format('woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
}


  body {
     font-family: "Mont Heavy", sans-serif;
     margin: 0;
     padding: 0;
     background: #EBF4FF;
   }
   a {
     color: inherit;
     text-decoration: none;
   }
  `;
