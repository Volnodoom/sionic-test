import { DefaultParamsForTheme } from "types/global-types";

// withoutPaddings - determine the width of pure content for the site. But excluded paddings for centering site info
export const defaultTheme: DefaultParamsForTheme = {
  font: {
    small: '12px',
    base: '14px',
    upperBase: '16px',
    medium: '20px',
    large: '37px',
    extraLarge: '41px',
  },
  color: {
    white: '#FFFFFF',
    darkBlack: '#2D2D2F',
    extremelyLightGray: '#F8F8F8',
    lightGray: '#8D8D8E',
    gray: '#727280',
    extremelyLightBlue: '#F0F4FB',
    lightBlue: '#AEC2EA',
    blue: '#2967FF',
    lightPink: '#FF7CB4',
    pink: '#FF2D87',
    green: '#58CF18',
    yellow: '#FFA601',
  },
  width: {
    page: '1370px',
    contentSection: '916px',
    advertizement: '327px',
    withoutPaddings: '1293px'
  },
  padding: {
    button: '2px 10px',
    pageLeft: '50px',
    pageRight: '25px',
    pageBetween: '52px',
    pageTop: '20px',
  }
};
