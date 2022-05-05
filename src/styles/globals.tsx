import { createGlobalStyle } from 'styled-components';
import input from './settings/input';
import swiper from './settings/swiper';
import picker from './settings/picker';

const GlobalStyle = createGlobalStyle`
* {
    font-family: Pretendard, sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html,
body {
    padding: 0;
    margin: 0;
    font-size: 16px;
}

a {
    color: inherit;
    text-decoration: none;
}

  hr {
      border-color: ${({ theme }) => theme.color.gray1}
  }

  ${input}
  ${swiper}
  ${picker}
`;

export default GlobalStyle;
