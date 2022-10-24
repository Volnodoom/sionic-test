import { Button } from "components/styled";
import { CatalogLabelColor } from "constants/components";
import styled from "styled-components";
import { CategoryProps } from "types/components";
import { preventTextOverflow, setDimensions } from "utils/mixin";

const CardBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${setDimensions(214, 283)};
`;

const CardTitle = styled.h3`
  margin: 0 0 5px 0;
  order: 2;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  font-size: ${({ theme }) => theme.font.base };
  font-weight: 400;
`;

const NewPrice = styled.span`
  ${preventTextOverflow()}
  margin-bottom: 5px;
  order: 3;

  color: ${({ theme }) => theme.color.blue };
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.medium };
  line-height: 26px;
`;

const OldPrice = styled.s`
  order: -1;
  margin-right: 15px;

  color: ${({ theme }) => theme.color.lightGray };
  line-height: 17px;
  font-weight: 400;
`;

const PriceShift = styled.span`
  display: flex;
  order: 4;
  margin-bottom: 10px;

  align-items: flex-end;

  color: ${({ theme }) => theme.color.pink };
  font-weight: 600;
`;

const CardButton = styled(Button).attrs((props) => ({
  $border: `1px solid ${props.theme.color.blue}`,
  $radius: '26px',
  $padding: '10px 38px',
  $color: props.theme.color.blue,
  type: 'button',
}))`
  ${setDimensions(214, 40)};
  order: 5;

  font-weight: 400;
`;

const ProductInfoBox = styled.div`
  position: relative;
  margin-bottom: 5px;
  order: 1;
`;

const CategorySpanBlock = styled.div`
  position: absolute;
  left: 11px;
  bottom: 14px;
  width: calc(100% - 11px);

  display: flex;
  gap: 6px;

  overflow: hidden;
`;

const CategorySpan = styled.span<CategoryProps>`
  padding: 2px 10px;
  border-radius: 41px;

  flex-grow: 1;
  flex-shrink: 0;

  font-weight: 600;
  color: ${({ theme }) => theme.color.white };
  background-color: ${({ $numericCalor, theme }) =>  theme.color[CatalogLabelColor[$numericCalor]] };
`;

export {
  CardBox,
  CardTitle,
  PriceShift,
  OldPrice,
  NewPrice,
  CardButton,
  CategorySpan,
  ProductInfoBox,
  CategorySpanBlock
}
