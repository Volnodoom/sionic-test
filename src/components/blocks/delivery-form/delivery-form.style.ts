import styled from "styled-components";
import { DeliveryFieldsetParam, DeliveryInputProps, DeliveryList } from "types/components";
import { setDimensions, setFontValues } from "utils/mixin";
import DeliveryIconInactive from "assets/img/svg/delivery.svg"
import DeliveryIconActive from "assets/img/svg/delivery-active.svg"
import { Li, Ul } from "components/styled";

const Fieldset = styled.fieldset<DeliveryFieldsetParam>`
  margin: 0;
  padding: 0;
  border: none;
  margin-bottom: ${({ $bottom }) => $bottom ? $bottom : '18px' };

  width: 292px;
`;

const Legend = styled.legend`
  margin: 0 0 10px 0;

  ${({ theme }) => setFontValues(theme.font.upperBase, 22) };
  font-weight: 600;
`;

const Input = styled.input.attrs<DeliveryInputProps>(({ type }) => ({
  type: `${type ? type : 'text'}`,
}))<DeliveryInputProps>`
  display: inline-block;
  width: 112px;

  border: none;

  font-family: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray };
  }

  &:not(:only-of-type):first-of-type {
    margin-right: 10px;
  }
`;

const BigInput = styled(Input).attrs<DeliveryInputProps>(({ type }) => ({
  type: `${type ? type : 'text'}`,
}))<DeliveryInputProps>`
  padding: 10px 15px;
  width: 100%;

  border: ${({ theme }) => `1px solid ${theme.color.extremelyLightBlue}` };
  border-radius: 45px;
`;


const DestinationInput = styled(BigInput)`
  padding: 10px 40px;
`;

const DestinationWrapper = styled.div`
  display: flex;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: 10px;
    left: 10px;
    ${setDimensions(20, 20)};

    background-image: url(${DeliveryIconInactive})
  }

  &:focus-within::before {
    background-image: url(${DeliveryIconActive})
  }
`;

const OptionList = styled(Ul).attrs<DeliveryList>(({ isHidden }) => ({
  className: `${isHidden ? 'visually-hidden' : ''}`,
}))<DeliveryList>`
  position: absolute;
  top: 1px;
  left: 40px;
  width: 228px;

  background-color:  ${({ theme }) => theme.color.white };

  overflow-y: scroll;
  min-height: 100%;
  max-height: 120px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    height: 95px;
    border: 2px solid rgba(232, 229, 229, 0.5);
    border-radius: 6px;
    background-color: transparent;
  }
`;

const OptionItem = styled(Li)`
  padding: 10px 5px;

  &:hover,
  &:focus {
    background-color:  ${({ theme }) => theme.color.extremelyLightBlue };
  }

  cursor: pointer;
`;

export {
  Fieldset,
  Legend,
  Input,
  BigInput,
  DestinationInput,
  DestinationWrapper,
  OptionList,
  OptionItem,
}
