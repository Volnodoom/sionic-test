import { LOCAL_RU, MAIN_URL } from "constants/general.const";
import { Dispatch } from "react";
import GeneralUtils from "utils/general-utils";
import * as S from "./card.style";

type CardProps = {
  setModal: Dispatch<React.SetStateAction<boolean>>,
  title: string,
  imageUrl: string,
  alt: string,
  price: number,
};

const Card = (props: CardProps) => {
  const {
    setModal,
    title,
    imageUrl,
    alt,
    price,
  } = props;

  const handleAddToBasketClick = () => setModal(true);

  return(
    <S.CardBox>
      <S.CardTitle>{GeneralUtils.setFirstCapitaLetter(title)}</S.CardTitle>
      <S.NewPrice>от {(price*0.9).toLocaleString(LOCAL_RU)} ₽</S.NewPrice>
      <S.PriceShift>
        -10%
        <S.OldPrice>{price.toLocaleString(LOCAL_RU)} ₽</S.OldPrice>
      </S.PriceShift>
      <S.ProductInfoBox>
        <S.ProductImage src={`${MAIN_URL}${imageUrl}`} width="214" height="138" alt={alt}/>
        <S.CategorySpanBlock>
          <S.CategorySpan $numericCalor={4}>Игрушка</S.CategorySpan>
          <S.CategorySpan $numericCalor={4}>Мартышка</S.CategorySpan>
          <S.CategorySpan $numericCalor={1}>Подарок коллегам</S.CategorySpan>
        </S.CategorySpanBlock>
      </S.ProductInfoBox>

      <S.CardButton onClick={handleAddToBasketClick}>Добавить в корзину</S.CardButton>
    </S.CardBox>
  )
}

export default Card;
