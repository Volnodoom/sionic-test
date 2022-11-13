import { Button, P } from "components/styled";
import styled from "styled-components";
import { InputModalProps, ModalProp } from "types/components";
import { setDimensions, setFontValues } from "utils/mixin";

const Modal = styled.div<ModalProp>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  visibility: ${({ isActive }) => isActive ? 'visible' :'hidden'};
  overflow-y: auto;
  flex-direction: column;

  opacity: ${({ isActive }) => isActive ? 1 : 0 };
  background-color: ${({ isActive }) => isActive ? 'rgba(84, 77, 77, 0.65)' : 'rgba(0, 0, 0, 0.8)'};

  pointer-events: ${({ isActive }) => isActive ? 'auto' : 'none' };
  scrollbar-width: none;
`;

const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;

  width: 100%;
  min-height: 100%;
  padding: 60px 40px;
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: relative;
  width: 600px;
  padding: 40px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white };

  overflow: hidden;
`;

const ModalHeaderTitle = styled.h2`
  margin: 0;
  margin-bottom: 15px;

  ${({ theme }) => setFontValues(theme.font.medium, 25) };
  font-weight: 600;
`
const ModalInfo = styled.div`
  display: flex;
`;

const ModalImgBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  min-width: 100px;
`

const ModalImg = styled.img`
  display: block;
  ${setDimensions(100, 100)};

  object-fit: contain;
`;

const ModalInfoDetailsWrapper = styled.div`
  padding-top: 15px;
  padding-left: 20px;
  margin-bottom: 30px;
`;

const ProductTitle = styled.h3`
  margin: 0 0 10px 0;
  padding: 0;

  ${({ theme }) => setFontValues(theme.font.upperBase, 22) };
  font-weight: 600;

  text-transform: uppercase;
`;

const ProductVariationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-bottom: 10px;
`;

const ProductVariationLabel = styled.label`
  display: block;
  padding: 3px 5px;

  ${({ theme }) => setFontValues(theme.font.base, 20) };
  font-weight: 600;
  color: ${({ theme }) => theme.color.darkBlack };
  background-color: ${({ theme }) => theme.color.white };

  border: ${({ theme }) => `1px solid ${theme.color.pink}` };
  border-radius: 20px;
`;

const ProductVariationInput = styled.input.attrs({
  type: 'radio',
  className: 'visually-hidden',
})<InputModalProps>`
  &:checked + ${ProductVariationLabel} {
    background-color: ${({ theme }) => theme.color.lightPink };
    border: ${({ theme }) => `1 solid ${theme.color.lightPink}` };
  }
`;

const ProductWaring = styled(P)`
  margin-bottom: 15px;
  ${({ theme }) => setFontValues(theme.font.small, 16) };
  color: ${({ theme }) => theme.color.gray };
`;

const ProductDescription = styled(P)`
  margin-bottom: 20px;
`;

const ProductPrice = styled.span`
  ${({ theme }) => setFontValues(theme.font.upperBase, 25) };
  font-weight: 700;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const AddToBasketButton = styled(Button).attrs({
  type: 'button',
  $padding: '10px 20px',
})`
  margin: 0 auto;
  ${({ theme }) => setFontValues(theme.font.medium, 30) };

  background-color: ${({ theme }) => theme.color.pink};
  border: ${({ theme }) => `1px solid ${theme.color.pink}`};

  &:hover:not([disabled]),
  &:active:not([disabled]) {
    color: ${({ theme }) => theme.color.pink };
    background-color: ${({ theme }) => theme.color.white};
  }

  &:disabled {
    opacity: 0.1;
  }
`;

const ProductPropertyWrapper  = styled.div`
  min-height: 140px;
  margin-bottom: 15px;
`;

const ProductPropertyList = styled.dl`
  display: flex;
  justify-content: space-between;

  min-height: 20px;
  margin: 0 5px;
`;

const ProductPropertyDotting = styled.span`
  margin: 0 5px;
  margin-bottom: 5px;
  flex-grow: 1;

  border-bottom: ${({ theme }) => `2px dotted ${theme.color.darkBlack }`};
`;

const productPropertyDefinition = styled.dd`
  margin: 0;
`;

export {
  Modal,
  ModalWrapper,
  ModalOverlay,
  ModalContent,
  ModalHeaderTitle,
  ModalInfo,
  ModalImg,
  ModalInfoDetailsWrapper,
  ProductTitle,
  ProductVariationWrapper,
  ProductVariationLabel,
  ProductVariationInput,
  ProductWaring,
  ProductPrice,
  ButtonWrapper,
  AddToBasketButton,
  ProductDescription,
  ModalImgBlock,
  ProductPropertyList,
  ProductPropertyDotting,
  productPropertyDefinition,
  ProductPropertyWrapper,
}
