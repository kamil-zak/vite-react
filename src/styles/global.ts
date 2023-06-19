import { createGlobalStyle } from 'styled-components';
import bgImg from '../assets/pong_bg.png';

export const GlobalStyles = createGlobalStyle`
  body {
     font-family: Arial, Helvetica, sans-serif;
     margin: 0;
     padding: 0;
     background: url(${bgImg});
     background-attachment: fixed;
     background-size: cover;
     background-position: center;
     /* background-repeat: no-repeat; */
   }
   a {
     color: inherit;
     text-decoration: none;
   }
  `;
