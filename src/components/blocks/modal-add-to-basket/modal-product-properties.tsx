import { LoadingStatus } from "constants/general.const";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useStatusCheck } from "hooks/useStatusCheck";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchProductVarPropertyList } from "store/api-actions";
import * as ormSelector from "store/orm-modules-data/orm.selectors";
import { setProductVarPropertyListStatus } from "store/status-data/status-data";
import * as statusSelector from "store/status-data/status.selector";
import { ProductVarListClientType, ProductVarPropertyListClientType, ProductVarPropertyType } from "types/global-types";
import GeneralUtils from "utils/general-utils";
import * as S from "./modal-add-to-basket.style";

type ModalProductPropertiesType = {
  productVarList: ProductVarListClientType,
}

const getValueField = (data: ProductVarListClientType) => {
  if(data.valueFloat) {
    return data.valueFloat;
  }
  if(data.valueInt) {
    return data.valueInt;
  }
  if(data.valueString) {
    return data.valueString;
  }
}

const ModalProductProperties = ({productVarList}: ModalProductPropertiesType) => {
  const {prodVarPropListId, prodVarPropId } = productVarList;

  const property = useSelector(ormSelector.getProductVarProperty) as ProductVarPropertyType[];
  const subProperty = useSelector(ormSelector.getProductVarPropertyList) as ProductVarPropertyListClientType[];

  const productVarPropertyStatus = useSelector(statusSelector.getProductVarPropertyStatus);
  const productVarPropertyListStatus = useSelector(statusSelector.getProductVarPropertyListStatus);

  const [isSuccessPropertyStatus] = useStatusCheck(productVarPropertyStatus);
  const [isSuccessPropertyListStatus] = useStatusCheck(productVarPropertyListStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(prodVarPropListId) {
      dispatch(fetchProductVarPropertyList(prodVarPropId));
      dispatch(setProductVarPropertyListStatus(LoadingStatus.Loading));
    }
  }, [dispatch, prodVarPropId, prodVarPropListId])

  if(!isSuccessPropertyStatus && !isSuccessPropertyListStatus) {
    return (
      <S.ProductPropertyList>
        <dt>Loading</dt>
        <S.ProductPropertyDotting />
      </S.ProductPropertyList>
      );
  }

  const title = GeneralUtils.findDataWithId<ProductVarPropertyType>(property, prodVarPropId)?.name;
  const value = getValueField(productVarList);
  const subValue = GeneralUtils.findDataWithId<ProductVarPropertyListClientType>(subProperty, prodVarPropListId)?.title;

  if(prodVarPropListId && isSuccessPropertyStatus && isSuccessPropertyListStatus) {
    return (
      <S.ProductPropertyList>
        <dt>{title}</dt>
        <S.ProductPropertyDotting />
        <S.productPropertyDefinition>{subValue}</S.productPropertyDefinition>
      </S.ProductPropertyList>
    )
  }

  else if (isSuccessPropertyStatus && isSuccessPropertyListStatus)

  {
    return (
      <S.ProductPropertyList>
        <dt>{title}</dt>
        <S.ProductPropertyDotting />
        <S.productPropertyDefinition>{value}</S.productPropertyDefinition>
      </S.ProductPropertyList>
    )
  }
}

export default ModalProductProperties;
