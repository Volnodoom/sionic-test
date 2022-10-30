import { ContentWrapper, MainTitle } from "components/styled";
import * as S from "./catalog.style";
import Card from "../../components/blocks/card/card";
import Filtration from "../../components/blocks/filtration/filtration";
import ModalAddToBasket from "components/blocks/modal-add-to-basket/modal-add-to-backet";
import { useSelector } from "react-redux";
import * as selector from "store/selectors/selector-catalog";
import { useEffect } from "react";
import { useAppDispatch } from "hooks/useAppDispatch";
import { fetchCategories } from "store/api-actions";

const Catalog = () => {
  const dispatch = useAppDispatch();

  const categoryList = useSelector(selector.getCategory);

  const handleClick = () => {
    console.log(categoryList)
    console.log()

  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])


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
      <S.ShowMoreButton onClick={handleClick}>Показать больше товаров</S.ShowMoreButton>

      <ModalAddToBasket />
    </ContentWrapper>

  )
}

export default Catalog;
