import * as S from "./special-offer.style";

type SpecialOfferProp = {
  className?: string,
}

const SpecialOffer = (props: SpecialOfferProp) => {
  return(
    <S.ContentWrapper className={props.className}>
      <S.Slogan>Получай товары БЕСПЛАТНО!</S.Slogan>
      <S.MoreDetailsButton>Узнать подробнее</S.MoreDetailsButton>
    </S.ContentWrapper>
  )
}

export default SpecialOffer;
