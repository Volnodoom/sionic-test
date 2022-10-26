import * as S from "./basket-summery.style";

const BasketSummery = () => {
  return(
    <S.SummeryDiv>
      <S.CategoryName>Xiaomi</S.CategoryName>
      <S.BasketResult>
        <S.Text>Стоимость корзины:</S.Text>
        <S.Price>1 185 000₽</S.Price>
      </S.BasketResult>
      <S.OrderButton>Оформить</S.OrderButton>
    </S.SummeryDiv>
  )
}

export default BasketSummery;
