import * as S from "./card.style";

const Card = () => {
  return(
    <S.CardBox>
      <S.CardTitle>Длинное название товара в одну строчку п...</S.CardTitle>
      <S.NewPrice>от 350 000 ₽</S.NewPrice>
      <S.PriceShift>
        -10%
        <S.OldPrice>450 500 ₽</S.OldPrice>
      </S.PriceShift>
      <S.ProductInfoBox>
        <img src="/img/mock-img.png" width="214" height="138" alt=""/>
        <S.CategorySpanBlock>
          <S.CategorySpan $numericCalor={4}>Игрушка</S.CategorySpan>
          <S.CategorySpan $numericCalor={4}>Мартышка</S.CategorySpan>
          <S.CategorySpan $numericCalor={1}>Подарок коллегам</S.CategorySpan>
        </S.CategorySpanBlock>
      </S.ProductInfoBox>

      <S.CardButton>Добавить в корзину</S.CardButton>
    </S.CardBox>
  )
}

export default Card;
