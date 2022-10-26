export type IBreakpoints = {
  breakpoints: {
    extraSmall: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
    big: string;
  };
};

export type IDefaultThemeProps = {
  white: string;
  light: string;
  dark: string;
  gray: string;
  blue: string;
  darkBlue: string;
  orange: string;
  whiteSmoke: string;
  darkKettle: string;
};

export type ICustomThemeProps = {
  text: string;
  background: string;
  pageBackground: string;
};

export type IThemeProps = IDefaultThemeProps & ICustomThemeProps & IBreakpoints;
