import { ClassNameProp } from "types/components";
import * as S from "./advertizing.style";

const Advertizing = (props: ClassNameProp) => {
  return(
    <S.ContentWrapper className={props.className}>
      <S.Offer />
      <S.AdvGalleryWrapper>
        <S.CardInfo1 href="/">
          <S.CardTitle>Новая коллекция</S.CardTitle>
        </S.CardInfo1>

        <S.CardInfo2 href="/">
          <S.CardTitle>Новая коллекция</S.CardTitle>
        </S.CardInfo2>

        <S.CardInfo1 href="/">
          <S.CardTitle>Новая коллекция</S.CardTitle>
        </S.CardInfo1>
      </S.AdvGalleryWrapper>
    </S.ContentWrapper>
  )
}

export default Advertizing;
