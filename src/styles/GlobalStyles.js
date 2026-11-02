
  import { createGlobalStyle } from 'styled-components';

  export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'DM Sans', sans-serif;
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.text};
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    h1, h2, h3, p { margin-top: 0; }
    ::selection { background: ${(props) => props.theme.accent}; color: ${(props) => props.theme.primary}; }
    button, a { -webkit-tap-highlight-color: transparent; }
    a:focus {
      outline: 2px solid ${(props) => props.theme.accent};
      outline-offset: 2px;
    }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
    }
  `;