import { ContentWrapper, MainTitle, P } from "components/styled";
import * as S from "./catalog.style";
import Card from "../../components/blocks/card/card";
import Filtration from "../../components/blocks/filtration/filtration";
import ModalAddToBasket from "components/blocks/modal-add-to-basket/modal-add-to-backet";
import { useSelector } from "react-redux";
import * as selector from "store/selectors/selectors";
import { useEffect, useState } from "react";
import { useAppDispatch } from "hooks/useAppDispatch";
import { fetchImages, fetchProducts, fetchStockPrices } from "store/api-actions";
import { LoadingStatus, MAIN_URL, ONE, UPLOADING_STEP } from "constants/general.const";
import {  ImageClientType, ProductClientType, StockPricesClientType } from "types/global-types";
import { setImageStatus, setProductStatus, setStockPriceStatus } from "store/status-data/status-data";
import GeneralUtils from "utils/general-utils";
import * as statusSelector from "store/status-data/status.selector";
import { useStatusCheck } from "hooks/useStatusCheck";

const InitialItems = {
  rangeStart: 0,
  rangeEnd: 15,
}

const Catalog = () => {
  const dispatch = useAppDispatch();
  const [shownItemsRange, setShownItemsRange] = useState(InitialItems);
  const [isModalActive, setIsModalActive] = useState(false);

  const productList = useSelector(selector.getProducts) as ProductClientType[];
  const imageList = useSelector(selector.getImages) as ImageClientType[];
  const stockPriceList = useSelector(selector.getStockPrices) as StockPricesClientType[];
  const idProductList = useSelector(selector.getProductsId) as [id: number] | undefined;
  const productStatus = useSelector(statusSelector.getProductStatus);
  const imageStatus = useSelector(statusSelector.getImageStatus);
  const stockPriceStatus = useSelector(statusSelector.getStockPriceStatus);

  const [isProductSuccess] = useStatusCheck(productStatus);
  const [isImageSuccess] = useStatusCheck(imageStatus);
  const [isStockPriceSuccess] = useStatusCheck(stockPriceStatus);

  const isDataSuccess = isProductSuccess && isImageSuccess && isStockPriceSuccess;
  const isDataReady = (imageList.length > 0) && (stockPriceList.length > 0) && (productList.length > 0);

  useEffect(() => {
    dispatch(setProductStatus(LoadingStatus.Loading));
    dispatch(fetchProducts(shownItemsRange));
  }, [dispatch, shownItemsRange]);


  useEffect(() => {
    if(idProductList && idProductList.length > 0) {
      dispatch(setImageStatus(LoadingStatus.Loading));
      dispatch(setStockPriceStatus(LoadingStatus.Loading));

      dispatch(fetchImages({idList: idProductList, isExtraFetchCall: false}));
      dispatch(fetchStockPrices({idList: idProductList, isExtraFetchCall: false}));
    }
  }, [idProductList, dispatch]);

  const handleShowMoreClick = () => {
    setShownItemsRange((prevValue) => ({
      rangeStart: prevValue.rangeEnd + ONE,
      rangeEnd: prevValue.rangeEnd + UPLOADING_STEP,
    }))
  };

  return(
    <ContentWrapper $bottom="55">
      <MainTitle $bottom="20">Категории товаров</MainTitle>
      <S.SortingSettings>Настройки</S.SortingSettings>

      <Filtration />
      <S.CardGallery>
        {
          isDataReady && isDataSuccess
          ?
            productList.map(line => {
              const productId = line.id;
              return (
              <Card
                setModal={setIsModalActive}
                title={line.name}
                imageUrl={imageList.find((img) => img.productId === productId)?.imageUrl as string}
                alt={`${MAIN_URL}${imageList.find((img) => img.productId === productId)?.name}`}
                price={GeneralUtils.getMinimalPrice(stockPriceList, productId)}
                key={line.id}
              />
              )
            })
          :
            <P>По данному запросу товары не найдены</P>
        }
      </S.CardGallery>
      <S.ShowMoreButton onClick={handleShowMoreClick}>Показать больше товаров</S.ShowMoreButton>

      <ModalAddToBasket isModalActive={isModalActive} setModal={setIsModalActive} />
    </ContentWrapper>

  )
}

export default Catalog;
