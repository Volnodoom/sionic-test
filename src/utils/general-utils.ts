import { AxiosResponseHeaders } from "axios";
import { CONTENT_RANGE, ONE, QueryValues, SERVER_MAX_OUTPUT } from "constants/general.const";
import { ColorRange, ObjectWithIdType } from "types/components"
import { ImageClientType, ImageServerType, ProductClientType, ProductServerType, ProductVarListClientType, ProductVarListServerType, ProductVarPropertyListClientType, ProductVarPropertyListServerType, SetupNextFetchType, StockPricesClientType, StockPricesServerType } from "types/global-types";

class GeneralUtils {
	static getRandomPositiveInteger = function (valueA: number, valueB: number) {
		const lower = Math.ceil (Math.min (Math.abs (valueA), Math.abs (valueB)));
		const upper = Math.floor (Math.max (Math.abs (valueA), Math.abs (valueB)));
		const result = Math.random () * (upper - lower + 1) + lower;
		return Math.floor (result);
	};

  static getRandomColor = function (valueA: ColorRange, valueB: ColorRange): ColorRange {
    return (GeneralUtils.getRandomPositiveInteger(valueA, valueB) as unknown as ColorRange)
  }

  static setFirstCapitaLetter = function (text: string): string {
    const firstLetter = text[0];
    return text.replace(firstLetter, firstLetter.toUpperCase());
  }

  static adaptClientProduct = function (data: ProductServerType): ProductClientType {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      categoryId: data['category_id'],
    }
  }

  static adaptClientImage = function (data: ImageServerType): ImageClientType {
    return {
      id: data.id,
      name: data['image_name'],
      imageUrl: data['image_url'],
      productId: data['product_id'],
    }
  }

  static adaptClientStockPrices = function (data: StockPricesServerType): StockPricesClientType {
    return {
      id: data.id,
      stock: data.stock,
      price: data.price,
      productId: data['product_id'],
    }
  }

  static adaptClientProductVariationList = function (data: ProductVarListServerType): ProductVarListClientType {
    const checkValue = <T>(value: T | null) => value ? value : undefined;
    return {
      id: data.id,
      prodVarId: data['product_variation_id'],
      prodVarPropId: data['product_variation_property_id'],
      valueString: checkValue(data['value_string']),
      valueInt: checkValue(data['value_int']),
      valueFloat: checkValue(data['value_float']),
      prodVarPropListId: checkValue(data['product_variation_property_list_value_id']),
    }
  }

  static adaptClientProductVarProperty = function (data: ProductVarPropertyListServerType): ProductVarPropertyListClientType {
    return {
      id: data.id,
      productVarPropertyId: data['product_variation_property_id'],
      title: data.title,
      value: data.value,
    }
  }

  static setupNextFetch = function (responseHead: AxiosResponseHeaders): SetupNextFetchType {
    const text = String(responseHead[CONTENT_RANGE]);
    const [startValue, shiftedValue, totalValue] = [...text.matchAll(/\d{1,}/ig)];

    if(totalValue) {
      return shiftedValue[0] < totalValue[0]
        ? {
          contentRangeStart: Number(shiftedValue[0] + ONE),
          contentRangeEnd: Number(shiftedValue[0] + SERVER_MAX_OUTPUT),
        }
        : null
    } else {
      return Number(shiftedValue[0]) >= SERVER_MAX_OUTPUT
      ? {
        contentRangeStart: SERVER_MAX_OUTPUT,
        contentRangeEnd: 2*SERVER_MAX_OUTPUT - ONE,
      }
      : null
    }
  }

  static getMinimalPrice = function (stockPriceList: StockPricesClientType[], productId: number) {
    const relatedValueList = stockPriceList.filter((priceData) => priceData.productId === productId);
    const sortDecreaseData = relatedValueList.slice().sort((valueA, valueB) => valueA.price - valueB.price);
    return sortDecreaseData[0].price;
  }

  static correctRangeForRangeFetch = function (startNumber: number, endNumber: number) {
    return QueryValues.Range(startNumber - ONE, endNumber - ONE);
  }

  static findDataWithId = function<T extends ObjectWithIdType> (array: T[] , id: number) {
    return array.find((line) => line.id === id);
  }
}

export default GeneralUtils;
