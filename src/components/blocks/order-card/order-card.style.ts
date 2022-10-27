import { IconButton } from "components/styled";
import styled from "styled-components";
import { preventLineTextOverflow, setDimensions, setFontValues } from "utils/mixin";

const OrderCardGridBox = styled.div`
  ${setDimensions(448, 236)};

  display: grid;
  grid-template-rows: 50px 33px 1fr;
  row-gap: 10px;

  padding: 20px;

  border: ${({ theme }) => `1px solid ${theme.color.lightBlue}` };
  border-radius: 32px;
`;

const CardHeadGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 50px 318px 1fr;
  grid-template-rows: 50px;
  column-gap: 10px;
`;

const OrderImg = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  ${setDimensions(50, 50)};
`;

const ButtonTick = styled(IconButton)`
  grid-column: 3/4;
  grid-row: 1/2;

  margin-bottom: auto;
`;

const OrderHeadInfo = styled.div`
  grid-column: 2/3;
`;


const CardTitle = styled.h3`
  display: flex;
  margin: 0;

  ${({ theme }) => setFontValues(theme.font.medium, 26) };
  font-weight: 600;

  ${preventLineTextOverflow()};
`;

const CardTitleSpan = styled.span`

  &:not(:only-of-type):not(:last-of-type) {
    margin-right: 10px;
  }
`;

const CardTitleFlex = styled.div`
  display: flex;
  align-items: center;
`;

const InfoDate = styled.span`
  margin-right: 10px;

  font-weight: 600;
  color: ${({ theme }) => theme.color.gray };
`;

const AnchorMoreDetails = styled.a`
  display: block;

  color: ${({ theme }) => theme.color.blue };
  ${({ theme }) => setFontValues(theme.font.small, 15) };
  font-weight: 600;

  text-decoration: none;

  &:link { color: ${({ theme }) => theme.color.blue }; }
  &:visited { color: ${({ theme }) => theme.color.blue }; }
  &:hover { opacity: 0.8; }
  &:active { opacity: 0.6; }
`;

const OrderInfoGridLine = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-columns: auto;
  grid-template-rows: auto;
  column-gap: 20px;
`;

const ColumnWrapper = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-row: 1/2;

  margin: 0;
`;

const ParameterName = styled.dt`
  color: ${({ theme }) => theme.color.gray };
  ${({ theme }) => setFontValues(theme.font.small, 15) };
  font-weight: 500;

  word-wrap: break-word;
`;

const ParameterValue = styled.dd`
  margin: 0;
  ${({ theme }) => setFontValues(theme.font.small, 15) };
  font-weight: 600;

  word-wrap: break-word;
`;

const CopyButton = styled(IconButton)`
  display: inline-block;
`;

const SpanSpecific = styled.span`
  margin-right: 5px;
  display: inline-block;

  color: ${({ theme }) => theme.color.blue };
`;

export {
  OrderCardGridBox,
  CardHeadGrid,
  CardTitle,
  CardTitleSpan,
  CardTitleFlex,
  InfoDate,
  AnchorMoreDetails,
  OrderHeadInfo,
  OrderImg,
  OrderInfoGridLine,
  ColumnWrapper,
  ParameterName,
  ParameterValue,
  SpanSpecific,
  ButtonTick,
  CopyButton,
}
