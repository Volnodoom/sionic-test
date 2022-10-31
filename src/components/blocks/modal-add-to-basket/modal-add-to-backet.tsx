import { Dispatch, useEffect, useRef } from "react";
import * as S from "./modal-add-to-basket.style";

type ModalAddToBasketProps = {
  isModalActive: boolean,
  setModal: Dispatch<React.SetStateAction<boolean>>,
};

const ModalAddToBasket = ({isModalActive, setModal}: ModalAddToBasketProps) => {
  const scrollWidth = useRef<null | number>(null);

  useEffect(() => {
    if(isModalActive) {
      document.body.classList.add('scroll-lock');
      document.body.style.paddingRight = `${scrollWidth.current}px`
    } else {
      document.body.classList.remove('scroll-lock');
      document.body.style.paddingRight = `0`;

      const clientWidth = document.body.clientWidth;
      const windowWidth = window.innerWidth;

      scrollWidth.current = windowWidth - clientWidth;
    }
  })

  const handleOverlayClick = () => setModal(false);

  return(
    <S.Modal isActive={isModalActive}>
      <S.ModalWrapper>
        <S.ModalOverlay onClick={handleOverlayClick}/>
        <S.ModalContent>
          <S.ModalHeaderTitle>Добавить товар в корзину</S.ModalHeaderTitle>

          <S.ModalInfo>
            <S.ModalImg src=''/>

            <S.ModalInfoDetailsWrapper>
              <S.ProductTitle>Xiome</S.ProductTitle>

              <S.ProductVariationWrapper>
                <S.ProductVariationInput id="uniq-id-1" name="product" value="Long Phone"/>
                <S.ProductVariationLabel htmlFor="uniq-id-1">Long Phone</S.ProductVariationLabel>
                <S.ProductVariationInput id="uniq-id-2" name="product" value="Short Phone"/>
                <S.ProductVariationLabel htmlFor="uniq-id-2">Short Phone</S.ProductVariationLabel>
                <S.ProductVariationInput id="uniq-id-3" name="product" value="Chip accessories"/>
                <S.ProductVariationLabel htmlFor="uniq-id-3">Chip accessories</S.ProductVariationLabel>
                <S.ProductVariationInput id="uniq-id-3" name="product" value="Chip accessories"/>
                <S.ProductVariationLabel htmlFor="uniq-id-3">Chip accessories</S.ProductVariationLabel>
                <S.ProductVariationInput id="uniq-id-3" name="product" value="Chip accessories"/>
                <S.ProductVariationLabel htmlFor="uniq-id-3">Chip accessories</S.ProductVariationLabel>
                <S.ProductVariationInput id="uniq-id-3" name="product" value="Chip accessories"/>
                <S.ProductVariationLabel htmlFor="uniq-id-3">Chip accessories</S.ProductVariationLabel>
              </S.ProductVariationWrapper>

              <S.ProductWaring>* необходимо выбрать вариацию товара для добавления продукта в корзину</S.ProductWaring>
              <S.ProductDescription>Описание товара, что эьто такое и как им пользоваться фвафывафыва фывафып фыапф фы фаыпыафпф фыыпфыв</S.ProductDescription>
              <S.ProductPrice>Цена: 350 000 ₽ </S.ProductPrice>
            </S.ModalInfoDetailsWrapper>
          </S.ModalInfo>

          <S.ButtonWrapper>
            <S.AddToBasketButton>Добавить в корзину</S.AddToBasketButton>
          </S.ButtonWrapper>

        </S.ModalContent>
      </S.ModalWrapper>
    </S.Modal>
  )
}

export default ModalAddToBasket;
