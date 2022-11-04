import { IDefaultThemeProps, IBreakpoints, IThemeProps } from "./";

const breakpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
  desktopL: "2560px",
};

const devices = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileM: `(min-width: ${breakpoints.mobileM})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktopL: `(min-width: ${breakpoints.desktopL})`,
};

const globalBreakpoints: IBreakpoints = {
  breakpoints,
  devices,
};

const globalColors: IDefaultThemeProps = {
  white: "#FFFFFF",
  light: "#F6F6F6",
  dark: "#161515",
  gray: "#747474",
  blue: "#040EFF",
  darkBlue: "#0007AE",
  orange: "#FF6B00",
  whiteSmoke: "#F5F5F5",
  darkKettle: "#474747",
};

export const ligthTheme: IThemeProps = {
  ...globalBreakpoints,
  ...globalColors,

  text: globalColors.dark,
  background: globalColors.white,
  pageBackground: globalColors.whiteSmoke,
};

export const darkTheme: IThemeProps = {
  ...globalBreakpoints,
  ...globalColors,

  text: globalColors.light,
  background: globalColors.dark,
  pageBackground: globalColors.dark,
};
