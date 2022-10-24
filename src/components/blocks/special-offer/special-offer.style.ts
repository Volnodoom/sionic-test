import { Button } from "components/styled";
import styled from "styled-components";
import { setDimensions, setFontValues } from "utils/mixin";
import Offer from 'assets/img/svg/offer.svg';

const ContentWrapper = styled.div`
  position: relative;
  ${setDimensions(311, 143)};

  border: ${({ theme }) => `1px solid ${theme.color.pink}`};
  border-radius: 20px;

  background-color: ${({ theme }) => theme.color.white};

  &::before {
    position: absolute;
    content: '';
    top: 32px;
    left: -11px;

    ${setDimensions(91, 82)};

    background-image: url(${Offer});
  }
`;

const Slogan = styled.p`
  position: absolute;
  top: 21px;
  right: 54px;

  margin: 0;
  ${setDimensions(162, 52)}

  color: ${({ theme }) => theme.color.blue};
  ${({ theme }) =>  setFontValues(theme.font.medium, 26)};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MoreDetailsButton = styled(Button).attrs(({ theme }) => ({
  $back: theme.color.blue,
  $padding: '10px 24px',
  $radius: '51px',
  type: 'button',
}))`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 24px;

  ${setDimensions(194, 40)}


  ${({ theme }) =>  setFontValues(theme.font.upperBase, 19)};
  font-weight: 600;

`;

export {
  ContentWrapper,
  Slogan,
  MoreDetailsButton,

}
