import { LoadingStatus, MAIN_URL, ONE } from "constants/general.const";
import { useAppDispatch } from "hooks/useAppDispatch";
import { Dispatch, Fragment, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { fetchProductVarList, fetchProductVarProperty } from "store/api-actions";
import * as ormSelector from "store/orm-modules-data/orm.selectors";
import { setProductVarPropertyListStatus, setProductVarPropertyStatus, setSelectedProduct } from "store/status-data/status-data";
import { addProductToBasket, setCurrentProductVarId, setCurrentProductVarPropertyId, setCurrentProductVarPropertyListId } from "store/user-shop-data/user-shop-data";
import * as userShopSelector from "store/user-shop-data/user-shop-data.selector";
import { BasicProductInfoType, ProductVarListClientType, StockPricesClientType } from "types/global-types";
import * as S from "./modal-add-to-basket.style";
import ModalProductProperties from "./modal-product-properties";

type ModalAddToBasketProps = {
  isModalActive: boolean,
  setModal: Dispatch<React.SetStateAction<boolean>>,
};

const ModalAddToBasket = ({isModalActive, setModal}: ModalAddToBasketProps) => {
  const scrollWidth = useRef<null | number>(null);
  const dispatch = useAppDispatch();

  const variationId = useSelector(userShopSelector.getCurrentProductVarId) as number;

  // receive general info about product without properties details
  const fullProductInfo = useSelector(ormSelector.getFullProductInfo) as BasicProductInfoType;

  // get list of all properties for current choice
  const currentProductVarList = useSelector(ormSelector.getProductVarList) as ProductVarListClientType[] | undefined;

  // get productVarProperty`s ids from current ProductVarList to fetch this values and get names of the parameters
  const productVarPropertyIdsList = useSelector(ormSelector.getProductVarPropertyIds) as number[] | undefined;

  const currentStockPrice = useSelector(ormSelector.getCurrentStockPrice) as StockPricesClientType;

  useEffect(() => {
    if(isModalActive) {
      document.body.classList.add('scroll-lock');
      document.body.style.paddingRight = `${scrollWidth.current}px`
    } else {
      document.body.classList.remove('scroll-lock');
      document.body.style.paddingRight = `0`;

      const clientWidth = document.body.clientWidth;
      const windowWidth = window.innerWidth;

      scrollWidth.current = windowWidth - clientWidth;
    }
  })

  useEffect(() => {
    dispatch(setCurrentProductVarId(variationId));

    if(variationId && currentProductVarList && currentProductVarList.length === 0) {
      dispatch(fetchProductVarList(variationId));
    }
  }, [currentProductVarList, dispatch, variationId]);

  useEffect(() => {
    if(productVarPropertyIdsList && productVarPropertyIdsList.length > 0) {
      dispatch(fetchProductVarProperty(productVarPropertyIdsList));
      dispatch(setProductVarPropertyStatus(LoadingStatus.Loading));
    }
  },[dispatch, productVarPropertyIdsList, variationId])


  const handleCloseClick = () => {
    setModal(false);
    dispatch(setSelectedProduct(null));
    dispatch(setCurrentProductVarId(1));

    dispatch(setCurrentProductVarPropertyListId(null));
    dispatch(setCurrentProductVarPropertyId(null));

    dispatch(setProductVarPropertyStatus(LoadingStatus.Idle));
    dispatch(setProductVarPropertyListStatus(LoadingStatus.Idle));
  };

  if(!fullProductInfo) {
    return(
      <S.Modal isActive={isModalActive}>
      <S.ModalWrapper>
        <S.ModalOverlay onClick={handleCloseClick}/>
      </S.ModalWrapper>
      </S.Modal>
    )
  };

  const {product, images, stockPrise} = fullProductInfo;

  const handleChange = (versionId: number) => () => dispatch(setCurrentProductVarId(versionId));
  const handleAddToBasketClick = () => {
    dispatch(
      addProductToBasket(
        {
          product,
          stockPrise: currentStockPrice,
          variationNumber: variationId,
          propertyList: currentProductVarList,
        }
      )
    );

    handleCloseClick();
  }

  return(
    <S.Modal isActive={isModalActive}>
      <S.ModalWrapper>
        <S.ModalOverlay onClick={handleCloseClick}/>
        <S.ModalContent>
          <S.ModalHeaderTitle>Добавить товар в корзину</S.ModalHeaderTitle>

          <S.ModalInfo>
            <S.ModalImgBlock>
              <S.ModalImg src={`${MAIN_URL}${images[0]}`}/>
              <S.ModalImg src={`${MAIN_URL}${images.at(-1)}`}/>
            </S.ModalImgBlock>

            <S.ModalInfoDetailsWrapper>
              <S.ProductTitle>{product.name}</S.ProductTitle>

              <S.ProductVariationWrapper>
                {
                  stockPrise.map((info, index) => (

                    <Fragment key={`${info.id}general`}>
                      <S.ProductVariationInput
                        id={`stock-price-id-${info.id}`}
                        name="stock-variation"
                        value={info.price}
                        onChange={handleChange(info.id)}
                        defaultChecked={variationId === index + ONE}
                        key={`${info.id}input`}
                        />
                      <S.ProductVariationLabel
                        htmlFor={`stock-price-id-${info.id}`}
                        key={`${info.id}label`}
                      >
                        Вариант {index + ONE}
                      </S.ProductVariationLabel>
                    </Fragment>
                  ))
                }
              </S.ProductVariationWrapper>

              <S.ProductPropertyWrapper>
                {
                  currentProductVarList
                  ?
                  currentProductVarList.map((line) => (<ModalProductProperties productVarList={line} key={line.id}/>))
                  : ''
                }
              </S.ProductPropertyWrapper>

              <S.ProductDescription>{product.description}</S.ProductDescription>
              <S.ProductPrice>
                Цена: {variationId ? variationId : '0'} ₽
              </S.ProductPrice>
            </S.ModalInfoDetailsWrapper>
          </S.ModalInfo>

          <S.ButtonWrapper>
            <S.AddToBasketButton
            onClick={handleAddToBasketClick}
            >
              Добавить в корзину
            </S.AddToBasketButton>
          </S.ButtonWrapper>

        </S.ModalContent>
      </S.ModalWrapper>
    </S.Modal>
  )
}

export default ModalAddToBasket;
