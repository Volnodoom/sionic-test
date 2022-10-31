import DeliveryForm from "components/blocks/delivery-form/delivery-form";
import { ContentWrapper, MainTitle } from "components/styled";
import { FORM_DELIVERY_ID } from "constants/components.const";
import * as S from "./delivery.style";

const Delivery = () => {
  return(
    <ContentWrapper $bottom="55">
      <MainTitle $bottom="30">Доставка</MainTitle>
      <DeliveryForm />

      <S.DeliverySummery>
        <S.PricingDetails>
          <S.Position>Стоимость товаров:</S.Position>
          <S.Pricing>200 584₽</S.Pricing>
          <S.Position>Стоимость доставки:</S.Position>
          <S.Pricing>200₽</S.Pricing>
          <S.Position>Итого:</S.Position>
          <S.Pricing>200 784₽</S.Pricing>
        </S.PricingDetails>

        <S.DeliverySubmitButton form={FORM_DELIVERY_ID}>Сделать заказ</S.DeliverySubmitButton>
      </S.DeliverySummery>
    </ContentWrapper>
  )
}

export default Delivery;
