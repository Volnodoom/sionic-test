import { createGlobalStyle } from 'styled-components';
import RalewayRegularWoff from 'assets/fonts/raleway-regular.woff'
import RalewayMediumWoff from 'assets/fonts/raleway-medium.woff';
import RalewaySemiBoldWoff from 'assets/fonts/raleway-semi-bold.woff';
import RalewayBoldWoff from 'assets/fonts/raleway-bold.woff';
import RalewayRegularWoff2 from 'assets/fonts/raleway-regular.woff2'
import RalewayMediumWoff2 from 'assets/fonts/raleway-medium.woff2';
import RalewaySemiBoldWoff2 from 'assets/fonts/raleway-semi-bold.woff2';
import RalewayBoldWoff2 from 'assets/fonts/raleway-bold.woff2';
import MontserratWoff from 'assets/fonts/montserrat-bold.woff';
import MontserratWoff2 from 'assets/fonts/montserrat-bold.woff2';
import { ThemeParameters } from 'types/global-types';


const GlobalStyle = createGlobalStyle<ThemeParameters>`
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src:  local('Raleway'),
          url(${RalewayRegularWoff2}) format('woff2'),
          url(${RalewayRegularWoff}) format('woff');
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    src:  local('Raleway'),
          url(${RalewayMediumWoff2}) format('woff2'),
          url(${RalewayMediumWoff}) format('woff');
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    src:  local('Raleway'),
          url(${RalewaySemiBoldWoff2}) format('woff2'),
          url(${RalewaySemiBoldWoff}) format('woff');
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    src:  local('Raleway'),
          url(${RalewayBoldWoff2}) format('woff2'),
          url(${RalewayBoldWoff}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src:  local('Montserrat'),
          url(${MontserratWoff2}) format('woff2'),
          url(${MontserratWoff}) format('woff');
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100%;

    font-family: 'Raleway', Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.base};
    line-height: 20px;
    color: ${({ theme }) => theme.color.darkBlack};

    background-color: ${({ theme }) => theme.color.white};
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  textarea {
    resize: none;
  }

  /* firefox placeholder \ invalid fix + ios bdrs */
  input {
    border-radius: 0;
  }

  input::placeholder {
    opacity: 1;
  }

  input:invalid {
    box-shadow: none;
  }

  textarea {
    border-radius: 0;
  }

  textarea::placeholder {
    opacity: 1;
  }

  textarea:invalid {
    box-shadow: none;
  }

  select {
    border-radius: 0;
  }

  /* chrome search X removal */
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    appearance: none;
  }

  /* input[number] arrows removal */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;

    appearance: none;
  }

  input[type='number'] {
    appearance: textfield;
  }

  /* ios button \ inputs reset */
  select,
  textarea,
  input:matches([type='email'], [type='number'], [type='password'], [type='search'], [type='tel'], [type='text'], [type='url']) {
    appearance: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: none;
  }

  .visually-hidden {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;

    clip: rect(0 0 0 0);
  }

  .scroll-lock {
    overflow: hidden;
  }
`;

export { GlobalStyle };
