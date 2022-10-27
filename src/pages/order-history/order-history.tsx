import OrderCard from "components/blocks/order-card/order-card";
import { ContentWrapper, MainTitle } from "components/styled";
import * as S from "./order-history.style";

const OrderHistory = () => {
  return(
    <ContentWrapper $bottom="55">
      <MainTitle $bottom="30">История заказов</MainTitle>
      <S.CardGalleryGrid>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </S.CardGalleryGrid>
    </ContentWrapper>
  )
}

export default OrderHistory;
