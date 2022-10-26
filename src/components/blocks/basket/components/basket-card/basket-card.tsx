import * as S from "./basket-card.style";
import { Li } from "components/styled";
import {ReactComponent as IconTrash} from "assets/img/svg/icon-trash.svg";

const BasketCard = () => {
  return(
      <S.BasketCardGridBox>
        <S.ProductInfoBox>
          <S.ProductTitle>Смартфон Xiaomi Redmi Note 8 Pro 6/128GB, белый</S.ProductTitle>
        </S.ProductInfoBox>

        <S.ProductUl>
          <S.ProductItemAvailable>120 шт.</S.ProductItemAvailable>
          <S.ProductItemTime>за 12:48:35</S.ProductItemTime>
          <Li>Куплено: <S.SemBoldP>150 шт.</S.SemBoldP></Li>
        </S.ProductUl>

        <S.ProductImg src="/img/Frame-600.jpg" width="58" height="58" alt="" />

        <S.ButtonCountBox>
          <S.LeftSideButton aria-label="decrease value on 1"/>
          <S.CountValue defaultValue={25} type="number" max={99} id="25" name="25"/>
          <S.RightSideButton aria-label="increase value on 1"/>
        </S.ButtonCountBox>

        <S.ProductPriceBox>
          <S.NewPrice>от 350 000 ₽</S.NewPrice>
          <S.OldPrice>450 500 ₽</S.OldPrice>
        </S.ProductPriceBox>

        <S.DeletePosition><IconTrash /></S.DeletePosition>
      </S.BasketCardGridBox>
  )
}

export default BasketCard;
