type IDevices = {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    desktop: string;
    desktopL: string;
};

export type IBreakpoints = {
  breakpoints: IDevices;
  devices: IDevices;
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
  lightGray: string;
};

export type ICustomThemeProps = {
  text: string;
  background: string;
  pageBackground: string;
};

type IDynamicAccess = {
  [key: string]: string | IDevices;
}

export type IThemeProps = IDynamicAccess & IDefaultThemeProps & ICustomThemeProps & IBreakpoints;
