import { createTheme, Theme } from "@material-ui/core/styles";
import {
  BLACK_COLOR,
  WHITE_COLOR,
  TORY_BLUE_COLOR,
  NIGHT_RIDER_COLOR,
  GREY_COLOR,
  VIKING_COLOR,
  RHINO_COLOR,
  BALTIC_SEA_COLOR,
  SUMMER_SKY_COLOR,
  CERULEAN,
  CURIOUS_BLUE,
  CURIOUS_BLUE_BLUR,
  WHISPER_COLOR,
  ECLIPSE_COLOR,
  RED_COLOR,
  ARAPAWA_COLOR,
  BUSYELLOW_COLOR,
  MISCHKA_COLOR,
  PURE_WHITE,
  LIGHT_GREY,
} from "./colors";
import {
  XS_BREAKPOINT,
  SM_BREAKPOINT,
  MD_BREAKPOINT,
  LG_BREAKPOINT,
  XL_BREAKPOINT,
} from "./breakpoints";

interface ThemeColors {
  black: React.CSSProperties["color"];
  white: React.CSSProperties["color"];
  toryBlue: React.CSSProperties["color"];
  nightRider: React.CSSProperties["color"];
  grey: React.CSSProperties["color"];
  viking: React.CSSProperties["color"];
  rhino: React.CSSProperties["color"];
  balticSea: React.CSSProperties["color"];
  summerSky: React.CSSProperties["color"];
  cerulean: React.CSSProperties["color"];
  curiousBlue: React.CSSProperties["color"];
  curiousBlueBlur: React.CSSProperties["color"];
  whisper: React.CSSProperties["color"];
  eclipse: React.CSSProperties["color"];
  red: React.CSSProperties["color"];
  arapawa: React.CSSProperties["color"];
  busYellow: React.CSSProperties["color"];
  mischka: React.CSSProperties["color"];
  pureWhite: React.CSSProperties["color"];
  lightGrey: React.CSSProperties["color"];
}

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    colors: ThemeColors;
  }
  interface ThemeOptions {
    colors: ThemeColors;
  }
}

const theme: Theme = createTheme({
  colors: {
    black: BLACK_COLOR,
    white: WHITE_COLOR,
    toryBlue: TORY_BLUE_COLOR,
    nightRider: NIGHT_RIDER_COLOR,
    grey: GREY_COLOR,
    viking: VIKING_COLOR,
    rhino: RHINO_COLOR,
    balticSea: BALTIC_SEA_COLOR,
    summerSky: SUMMER_SKY_COLOR,
    cerulean: CERULEAN,
    curiousBlue: CURIOUS_BLUE,
    whisper: WHISPER_COLOR,
    eclipse: ECLIPSE_COLOR,
    red: RED_COLOR,
    arapawa: ARAPAWA_COLOR,
    busYellow: BUSYELLOW_COLOR,
    mischka: MISCHKA_COLOR,
    curiousBlueBlur: CURIOUS_BLUE_BLUR,
    pureWhite: PURE_WHITE,
    lightGrey: LIGHT_GREY,
  },
  breakpoints: {
    values: {
      xs: XS_BREAKPOINT,
      sm: SM_BREAKPOINT,
      md: MD_BREAKPOINT,
      lg: LG_BREAKPOINT,
      xl: XL_BREAKPOINT,
    },
  },
  spacing: 8,
});

export default theme;
