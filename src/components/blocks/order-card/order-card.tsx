import * as S from "./order-card.style";
import {ReactComponent as IconCopy} from "assets/img/svg/icon-copy.svg"
import {ReactComponent as IconTick} from "assets/img/svg/icon-tick.svg"
import { HiddenSpan } from "components/styled";

const OrderCard = () => {
  return(
    <S.OrderCardGridBox>
      <S.CardHeadGrid>
        <S.OrderHeadInfo>

          <S.CardTitle>
            <S.CardTitleSpan>Xiaomi</S.CardTitleSpan>
          </S.CardTitle>

          <S.CardTitleFlex>
            <S.InfoDate>21.12.2020</S.InfoDate>
            <S.AnchorMoreDetails>Подробнее</S.AnchorMoreDetails>
          </S.CardTitleFlex>

        </S.OrderHeadInfo>
        <S.OrderImg />
        <S.ButtonTick><IconTick /></S.ButtonTick>
      </S.CardHeadGrid>

      <S.OrderInfoGridLine>
        <S.ColumnWrapper>
          <S.ParameterName>Статус заказа</S.ParameterName>
          <S.ParameterValue>Оплачен/Завершён</S.ParameterValue>
        </S.ColumnWrapper>

        <S.ColumnWrapper>
          <S.ParameterName>Номер заказа</S.ParameterName>
          <S.ParameterValue>
            <S.SpanSpecific>#664-333</S.SpanSpecific>
            <S.CopyButton>
              <HiddenSpan>Скопируйте номер заказа</HiddenSpan>
              <IconCopy />
            </S.CopyButton>
          </S.ParameterValue>
        </S.ColumnWrapper>
      </S.OrderInfoGridLine>

      <S.OrderInfoGridLine>
        <S.ColumnWrapper>
          <S.ParameterName>Кол-во товаров</S.ParameterName>
          <S.ParameterValue>4 шт.</S.ParameterValue>
        </S.ColumnWrapper>

        <S.ColumnWrapper>
          <S.ParameterName>Стоимость заказа</S.ParameterName>
          <S.ParameterValue>250 000₽</S.ParameterValue>
        </S.ColumnWrapper>

        <S.ColumnWrapper>
          <S.ParameterName>Адрес доставки</S.ParameterName>
          <S.ParameterValue>ул. Коммунистич...д.1, стр.1</S.ParameterValue>
        </S.ColumnWrapper>

      </S.OrderInfoGridLine>
    </S.OrderCardGridBox>
  )
}

export default OrderCard;
