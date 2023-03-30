// Extending the base Chakra theme

import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// brand palette
const btcOrange = '#f7931a';
const oneBtcOrange = '#f27400';

// color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  cssVarPrefix: '1btc-news',
};

// global font overrides
const fonts = {
  heading: 'sans-serif',
  body: 'sans-serif',
};

// global style overrides
const styles = {
  global: {
    root: {
      fontSize: '18px',
      lineHeight: '1.6',
      color: 'white',
      bg: 'black',
      fontSynthesis: 'none',
      textRendering: 'optimizeLegibility',
      webkitFontSmoothing: 'antialiased',
      mozOsxFontSmoothing: 'grayscale',
      webkitTextSizeAdjust: '100%',
    },
    body: {
      bg: 'black',
      color: 'white',
      minWidth: '100%',
      maxWidth: '1280px',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center',
    },
    a: {
      color: oneBtcOrange,
      _hover: {
        color: btcOrange,
        textDecoration: 'underline',
      },
      _visited: {
        color: oneBtcOrange,
      },
    },
    button: {
      _hover: {
        bg: btcOrange,
      },
    },
  },
};

// extend the theme
const theme = extendTheme({ config, fonts, styles });

export default theme;
