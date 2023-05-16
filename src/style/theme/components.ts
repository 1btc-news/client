// Chakra component overrides
export const components = {
  Heading: {
    baseStyle: {
      fontWeight: '900',
    },
    defaultProps: {
      variant: null,
    },
  },
  Button: {
    baseStyle: {
      bg: 'var(--1btc-news-colors-brand-orange)',
    },
    defaultProps: {
      variant: null,
    },
  },
  Input: {
    baseStyle: {
      field: {
        bg: 'var(--1btc-news-colors-white)',
        borderColor: 'var(--1btc-news-colors-whiteAlpha-50)',
        borderWidth: 2,
        color: 'black',
        ':focus': {
          borderColor: 'var(--1btc-news-colors-brand-orange)',
        },
        '::placeholder': {
          color: 'var(--1btc-news-colors-gray-600)',
        },
      },
    },
    _hover: {
      borderColor: 'var(--1btc-news-colors-brand-orange)',
    },
    defaultProps: {
      variant: null,
    },
  },
  TextArea: {
    baseStyle: {
      bg: 'blue',
      outline: 'var(--1btc-news-colors-white)',
      color: 'black',
      ':focus-visible': {
        borderColor: 'var(--1btc-news-colors-brand-orange)',
        boxShadow: '0 0 1px red',
        color: 'red',
        backgroundColor: 'green',
      },
      '::placeholder': {
        color: 'var(--1btc-news-colors-gray-600)',
      },
    },
    defaultProps: {
      variant: null,
    },
  },
};
