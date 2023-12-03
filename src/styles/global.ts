import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font: 400 1rem 'Nunito', sans-serif;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }): string => theme.colors.blue};
  }

  body{
    background-color: ${({ theme }): string => theme.colors['base-background']};
    color: ${({ theme }): string => theme.colors['base-text']};
    min-height: 100vh;
    width: 100%;
  }

  #root{
    width: inherit;
    min-height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  html{
    @media (max-width: 1080px) {
      font-size: 87.5%;
    }
  }

`;
