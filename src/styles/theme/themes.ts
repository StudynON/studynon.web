import { IDefaultThemeProps, IBreakpoints, IThemeProps, IDevices } from "./";

const breakpoints: IBreakpoints = {
  breakpoints: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1440px",
    desktopL: "2560px",
  },
};

const devices: IDevices = {
  devices: {
    mobileS: `(min-width: ${breakpoints.breakpoints.mobileS})`,
    mobileM: `(min-width: ${breakpoints.breakpoints.mobileM})`,
    mobileL: `(min-width: ${breakpoints.breakpoints.mobileL})`,
    tablet: `(min-width: ${breakpoints.breakpoints.tablet})`,
    laptop: `(min-width: ${breakpoints.breakpoints.laptop})`,
    desktop: `(min-width: ${breakpoints.breakpoints.desktop})`,
    desktopL: `(min-width: ${breakpoints.breakpoints.desktopL})`,
  },
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
  ...breakpoints,
  ...devices,
  ...globalColors,

  text: globalColors.dark,
  background: globalColors.white,
  pageBackground: globalColors.whiteSmoke,
};

export const darkTheme: IThemeProps = {
  ...breakpoints,
  ...devices,
  ...globalColors,

  text: globalColors.light,
  background: globalColors.dark,
  pageBackground: globalColors.dark,
};
