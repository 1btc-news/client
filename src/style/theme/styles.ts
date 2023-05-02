// Chakra style overrides
export const styles = {
  global: {
    root: {
      fontSize: '18px',
      lineHeight: '1.5',
      color: 'white',
      bg: 'var(--1btc-news-colors-brand-dark)',
      fontSynthesis: 'none',
      textRendering: 'optimizeLegibility',
      webkitFontSmoothing: 'antialiased',
      mozOsxFontSmoothing: 'grayscale',
      webkitTextSizeAdjust: '100%',
    },
    body: {
      bg: 'black',
      color: 'white',
      minHeight: '100vh',
    },
    a: {
      color: 'var(--1btc-news-colors-brand-orange)',
      _hover: {
        textDecoration: 'underline',
      },
      _visited: {
        color: 'var(--1btc-news-colors-brand-orange)',
      },
    },
  },
};
