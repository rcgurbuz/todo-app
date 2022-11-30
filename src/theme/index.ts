// my-theme.ts
import { DefaultTheme } from 'styled-components';

const THEME: DefaultTheme = {
  colors: {
    primary: '#251B37',
    secondary: '#372948',
    gray: '	#C0C0C0',
    blue: '	#337ab7',
    white: '#fff',
    red: '#ff5a67',
  },

  padding: {
    xSmall: '10px',
    small: '12px',
    medium: '14px',
    large: '16px',
    xLarge: '18px',
    x2Large: '20px',
    x3Large: '24px',
    x4Large: '30px',
    x5Large: '38px',
  },

  mediaQueries: {
    mobile: '@media screen and (max-width: 428px)',
    tablet: '@media screen and (max-width: 768px)',
    notTablet: '@media screen and (min-width: 768px)',
    desktab: '@media screen and (max-width: 1140px)', // added for intermediary between desktop and tab
    notDesktab: '@media screen and (min-width: 1140px)',
    desktop: '@media screen and (max-width: 1280px)',
    largeScreen: '@media screen and (min-width: 1280px)',
  },
  fontSizes: {
    xSmall: '10px',
    small: '12px',
    medium: '14px',
    large: '16px',
    xLarge: '18px',
    x2Large: '20px',
    x3Large: '24px',
    x4Large: '30px',
    x5Large: '38px',
  },
  FONT_WEIGHTS: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },

  zIndex: {
    normal: 1,
    higher: 2,
    highest: 3,
  },
};

export { THEME };

// globalStyles.js
