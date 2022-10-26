import { ContentWrapper, MainTitle } from "components/styled";
import * as S from "./catalog.style";
import Card from "../../components/blocks/card/card";
import Filtration from "../../components/blocks/filtration/filtration";

const Catalog = () => {
  return(
    <ContentWrapper $bottom="55">
      <MainTitle $bottom="20">Категории товаров</MainTitle>
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
    </ContentWrapper>
  )
}

export default Catalog;
