import { createGlobalStyle } from 'styled-components'
import breakPoints from './breakPoints'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;

    @media ${breakPoints.tablet}{
      font-size: 14px;
    }
    @media ${breakPoints.mobile}{
      font-size: 12px;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`

export default GlobalStyles
