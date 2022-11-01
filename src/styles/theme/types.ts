export type IBreakpoints = {
  breakpoints: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    desktop: string;
    desktopL: string;
  };
  devices: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    desktop: string;
    desktopL: string;
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
