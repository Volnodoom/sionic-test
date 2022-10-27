import * as S from "./modal-add-to-basket.style";

const ModalAddToBasket = () => {
  return(
    <S.Modal>
      <S.ModalWrapper>
        <S.ModalOverlay></S.ModalOverlay>
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
