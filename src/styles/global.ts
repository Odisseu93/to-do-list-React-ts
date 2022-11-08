import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    scroll-behavior: smooth;
  }

  body { 
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(to right, #2980b9, #6dd5fa, #ffffff);
  
  }
`;
