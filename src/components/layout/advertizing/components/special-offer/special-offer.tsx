import { ClassNameProp } from "types/components";
import * as S from "./special-offer.style";

const SpecialOffer = (props: ClassNameProp) => {
  return(
    <S.ContentWrapper className={props.className}>
      <S.Slogan>Получай товары БЕСПЛАТНО!</S.Slogan>
      <S.MoreDetailsButton>Узнать подробнее</S.MoreDetailsButton>
    </S.ContentWrapper>
  )
}

export default SpecialOffer;
