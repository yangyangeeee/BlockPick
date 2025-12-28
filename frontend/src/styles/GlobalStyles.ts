import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    text-decoration: none;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

  }

  body {
    font-family: 'SchoolSafetyNotification', 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', sans-serif;
    background-color: #fff
  }
  
    @font-face {
    font-family: 'SchoolSafetyNotification';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimAllimjangTTF-R.woff2')
      format('woff2');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'SchoolSafetyNotification';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimAllimjangTTF-B.woff2')
      format('woff2');
    font-weight: 700;
    font-display: swap;
  }

  #root {
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyles;
