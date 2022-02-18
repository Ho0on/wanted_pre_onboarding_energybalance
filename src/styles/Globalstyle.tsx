import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {    
    box-sizing: border-box;

    @media screen and (max-width: 640px) {
    &::-webkit-scrollbar {
    display: none;
      }
    }
  }
   
  input:focus {
    outline: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
