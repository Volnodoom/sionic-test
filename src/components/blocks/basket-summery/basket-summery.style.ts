import { Button, P } from "components/styled";
import styled from "styled-components";
import DecorBasket from "assets/img/svg/decor-basket.svg"
import {
  hideOverflow,
  preventLineTextOverflow,
  setDimensions,
  setFontValues
} from "utils/mixin";


const SummeryDiv = styled.div`
  width: ${({ theme }) => theme.width.contentSection };
  height: 102px;

  display: flex;
  align-items: center;

  border: ${({ theme }) => `1px solid ${theme.color.lightBlue}` };
  border-radius: 20px;

  &::after{
    content: '';
    ${setDimensions(164, 100)};
    margin-right: 15px;

    background-image: url(${DecorBasket});
  }
`;

const CategoryName = styled(P)`
  width: 155px;
  height: 50px;

  margin-right: 21px;
  margin-left: 58px;

  ${({ theme }) => setFontValues(theme.font.medium, 26) };
  font-weight: 600;
  ${hideOverflow()};
`;

const BasketResult = styled.div`
  ${setDimensions(160, 50)};

  margin-right: 74px
`;

const Text = styled(P)`
  margin-bottom: 5px;
  ${({ theme }) => setFontValues(theme.font.upperBase, 22) };
  ${preventLineTextOverflow()};
`;

const Price = styled(P)`
  ${({ theme }) => setFontValues(theme.font.medium, 24) };
  font-weight: 700;

  ${preventLineTextOverflow()};
`;

const OrderButton = styled(Button).attrs(({ theme }) => ({
  type: 'button',
  $radius: '51px',
  $padding: '15px 66px',
  $back: theme.color.blue,
}))`
  ${({ theme }) => setFontValues(theme.font.upperBase, 19) };
  ${preventLineTextOverflow()};
  margin-right: auto;
`;

export {
  SummeryDiv,
  CategoryName,
  BasketResult,
  Text,
  Price,
  OrderButton,
};
