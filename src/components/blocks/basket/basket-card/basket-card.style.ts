import styled from "styled-components";
import { Button, Li, P, Ul } from "components/styled";
import { preventLineTextOverflow, setDimensions, setFontValues } from "utils/mixin";
import { BasketCardGridProps, InputNumberProps } from 'types/components';

const ProductUl = styled(Ul)`
  display: flex;
  grid-column: 2/8;
  grid-row: 2/3;

  overflow: hidden;
`;

const BasketCardGridBox = styled.div<BasketCardGridProps>`
  position: relative;
  width: 760px;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: ${({$isDetailsEmpty}) => $isDetailsEmpty ? '1fr' : '1fr 23px'};
  gap: 10px 20px;

  &:not(:first-of-type):not(:only-child) {
    margin-top: 10px;
  }

  &:not(:last-of-type):not(:only-child) {
    margin-bottom: 10px;
  }
`;

const ProductInfoBox = styled.div`
  grid-column: 2/6;
  grid-row: 1/2;
`;

const ProductTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;

  ${({ theme }) => setFontValues(theme.font.upperBase, 22) };
  font-weight: 400;
`;

const ProductItemAvailable = styled(Li)`
  z-index: 500;
  padding: 3px 12px 3px 13px;
  flex-wrap: 1;
  flex-shrink: 0;

  border: ${({ theme }) => `1px solid ${theme.color.blue}` };
  border-radius: 0 100px 100px 6px;

  color: ${({ theme }) => theme.color.blue };
  ${({ theme }) => setFontValues(theme.font.small, 15) };
  font-weight: 600;
  text-align: center;
`;

const ProductItemTime = styled(Li)`
  position: relative;
  padding: 3px 12px 3px 7px;
  margin-right: 10px;
  flex-wrap: 1;
  flex-shrink: 0;

  border: ${({ theme }) => `1px solid ${theme.color.pink}` };
  border-radius: 0 100px 100px 0;
  border-left-style: none;

  color: ${({ theme }) => theme.color.pink };
  ${({ theme }) => setFontValues(theme.font.small, 15) };
  font-weight: 600;
  text-align: center;

  &::before,
  &::after {
    position: absolute;
    content: '';
    ${setDimensions(10, 1)};
    left: -10px;
    z-index: 300;

    background-color: ${({ theme }) => theme.color.pink };
  }

  &::before {
    top: -1px;
  }

  &::after {
    bottom: -1px;
  }
`;

const SemBoldP = styled(P)`
  display: inline-block;
  flex-wrap: 1;
  flex-shrink: 0;

  font-weight: 600;
`;

const ButtonCountBox = styled.div`
  grid-column: 6/8;
  grid-row: 1/2;
  display: flex;
`;

const LeftSideButton = styled(Button).attrs(({ theme }) => ({
  type: 'button',
  $padding: '0px',
  $border: `1px solid ${theme.color.lightBlue}`,
  $radius: '35px 0 0 35px',
}))`
  position: relative;
  ${setDimensions(45, 44)};
  border-right-style: none;

  &:active {
    background-color: ${({ theme }) => theme.color.blue };
  }

  &:active::before {
    background-color: ${({ theme }) => theme.color.white };
  }

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${setDimensions(8, 1)};
    background-color: ${({ theme }) => theme.color.lightBlue };
  }
`;

const RightSideButton = styled(Button).attrs(({ theme }) => ({
  type: 'button',
  $padding: '0px',
  $border: `1px solid ${theme.color.lightBlue}`,
  $radius: '0 35px 35px 0',
}))`
  position: relative;
  ${setDimensions(45, 44)};
  border-left-style: none;

  &:active {
    background-color: ${({ theme }) => theme.color.blue };
  }

  &:active::before,
  &:active::after {
    background-color: ${({ theme }) => theme.color.white };
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;

    ${setDimensions(8, 1)};
    background-color: ${({ theme }) => theme.color.lightBlue };
  }

  &::before {
    transform: translate(-50%, -50%);

  }

  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

const CountValue = styled.input<InputNumberProps>`
  ${setDimensions(45, 44)};
  padding: 11px 0;

  border: ${({ theme }) => `1px solid ${theme.color.lightBlue}` };
  border-left-style: none;
  border-right-style: none;

  ${({ theme }) => setFontValues(theme.font.upperBase, 22) };
  ${preventLineTextOverflow()};
  text-align: center;
  font-family: inherit;
`;

const ProductPriceBox = styled.div`
  grid-column: 8/10;
  grid-row: 1/2;

  display: flex;
  flex-direction: column;
`;

const NewPrice = styled.span`
  margin-bottom: 5px;
  ${({ theme }) => setFontValues(theme.font.upperBase, 22) };
  font-weight: 600;

  ${preventLineTextOverflow()};
`;

const OldPrice = styled.s`
  ${({ theme }) => setFontValues(theme.font.upperBase, 22) };
  font-weight: 600;
  color: ${({ theme }) => theme.color.lightGray };

  ${preventLineTextOverflow()};
`;

const ProductImg = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  ${setDimensions(58, 58)};

  object-fit: cover;
`;

const DeletePosition = styled(Button).attrs({
  type: 'button',
  $radius: '0px',
  $padding: '0px',
})`
  position: absolute;
  top: 0;
  right: -20px;

  &:active > svg > path {
    stroke: ${({ theme }) => theme.color.pink };
  }
`;

export {
  BasketCardGridBox,
  ProductInfoBox,
  ProductTitle,
  ProductUl,
  ProductItemAvailable,
  ProductItemTime,
  SemBoldP,
  ButtonCountBox,
  RightSideButton,
  LeftSideButton,
  CountValue,
  ProductPriceBox,
  NewPrice,
  OldPrice,
  ProductImg,
  DeletePosition,
}
