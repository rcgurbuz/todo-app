// import original module declarations
import 'styled-components';
// and extend them!

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      gray: string;
      blue: string;
      white: string;
      red: string;
    };
    padding: {
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      x2Large: string;
      x3Large: string;
      x4Large: string;
      x5Large: string;
    };

    mediaQueries: {
      mobile: string;
      tablet: string;
      notTablet: string;
      desktab: string;
      notDesktab: string;
      desktop: string;
      largeScreen: string;
    };

    fontSizes: {
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      x2Large: string;
      x3Large: string;
      x4Large: string;
      x5Large: string;
    };

    FONT_WEIGHTS: {
      light: number;
      regular: number;
      semiBold: number;
      bold: number;
      extraBold: number;
    };

    zIndex: {
      normal: number;
      higher: number;
      highest: number;
    };
  }
}

export interface IGrid {
  css?: CSSObject;
  gridGap?: '4px' | '8px' | '12px' | '14px' | '16px';
  placeItems?: string;
  gridColumn?: string;
  placeContent?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridAutoFlow?: string;
  tag?: string;
}
