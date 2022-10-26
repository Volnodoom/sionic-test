import { MainTitle } from "components/styled";
import * as S from "./basket.style";
import BasketSummery from "./components/basket-summery/basket-summery";

const Basket = () => {
  return(
    <S.BasketWrapper $bottom="50">
      <MainTitle $bottom="30">Корзина</MainTitle>
      <S.ResetButton>Очистить корзину</S.ResetButton>

      <BasketSummery />


    </S.BasketWrapper>
  )
}

export default Basket;
