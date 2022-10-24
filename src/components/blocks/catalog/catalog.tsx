import * as S from "./catalog.style";
import Card from "./components/card/card";
import Filtration from "./components/filtration/filtration";

const Catalog = () => {
  return(
    <S.ContentWrapper>
      <S.MainTitle>Категории товаров</S.MainTitle>
      <S.SortingSettings>Настройки</S.SortingSettings>

      <Filtration />
      <S.CardGallery>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.CardGallery>
      <S.ShowMoreButton>Показать больше товаров</S.ShowMoreButton>
    </S.ContentWrapper>
  )
}

export default Catalog;
