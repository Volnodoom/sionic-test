import { ContentWrapper, MainTitle } from "components/styled";
import * as S from "./basket.style";
import BasketSummery from "components/blocks/basket-summery/basket-summery";
import BasketCard from "components/blocks/basket-card/basket-card";

const Basket = () => {
  return(
    <ContentWrapper $bottom="50">
      <MainTitle $bottom="30">Корзина</MainTitle>
      <S.ResetButton>Очистить корзину</S.ResetButton>

      <BasketSummery />
      <S.BasketCatalog>
        <BasketCard />
        <BasketCard />
        <BasketCard />
        <BasketCard />
      </S.BasketCatalog>

    </ContentWrapper>
  )
}

export default Basket;
