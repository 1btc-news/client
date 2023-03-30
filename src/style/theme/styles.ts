// Chakra style overrides
export const styles = {
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
      textAlign: 'left',
    },
    a: {
      color: 'var(--1btc-news-colors-brand-orange-900)',
      _hover: {
        color: 'var(--1btc-news-colors-brand-orange-700)',
        textDecoration: 'underline',
      },
      _visited: {
        color: 'var(--1btc-news-colors-brand-orange-900)',
      },
    },
  },
};
