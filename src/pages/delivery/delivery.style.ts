import { Button } from "components/styled";
import styled from "styled-components";
import { hideOverflow, setFontValues } from "utils/mixin";


const DeliverySummery = styled.div`
  width: 292px;
  position: absolute;
  top: 40px;
  left: 370px;
`;

const PricingDetails = styled.dl`
  margin-bottom: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 15px;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.extremelyLightBlue };
`;

const Position = styled.dt`
  display: inline-block;

  color: ${({ theme }) => theme.color.gray };

  &:last-of-type {
    margin-top: 15px;
  }
`;

const Pricing = styled.dd`
  margin: 0 0 0 auto;
  display: inline-block;

  color: ${({ theme }) => theme.color.gray };

  &:first-of-type {
    ${({ theme }) => setFontValues(theme.font.upperBase, 22) };
  }

  &:last-of-type {
    margin-top: 15px;

    color: ${({ theme }) => theme.color.darkBlack };
    ${({ theme }) => setFontValues(theme.font.upperBase, 22) };
    font-weight: 600;
  }
`;

const DeliverySubmitButton = styled(Button).attrs(({ theme }) => ({
  type: 'submit',
  $padding: '15px 30px',
  $back: theme.color.blue,
  $radius: '51px',
}))`
  width: 100%;
  flex-direction: column;
  ${hideOverflow()};
  ${({ theme }) => setFontValues(theme.font.upperBase, 19) };
`;

export {
  DeliverySummery,
  PricingDetails,
  Position,
  Pricing,
  DeliverySubmitButton,
}
