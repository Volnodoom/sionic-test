import { NonApiAction, StoreNameSpace } from "constants/store.const";
import Model, { attr, ModelType, oneToOne, Session } from "redux-orm";
import { ActionType, StockPricesServerType } from "types/global-types";
import GeneralUtils from "utils/general-utils";

export class StockPrices extends Model {
  static modelName = StoreNameSpace.StockPrices;
  static fields = {
    id: attr(),
    stock: attr(),
    price: attr(),
    productId: oneToOne({
      to: StoreNameSpace.Products,
      as: 'productInfo',
      relatedName: 'stockPrices',
    }),
  };

  static reducer(action: ActionType<StockPricesServerType[]>, StockPrices: ModelType<StockPrices>, session: Session<any>): void {
    switch(action.type) {
      case NonApiAction.CreateStockPrice: {
          action.payload.forEach(piece => {
            const adaptedData = GeneralUtils.adaptClientStockPrices(piece);
            const dataExist = StockPrices.exists(adaptedData);

            if(!dataExist) {
              StockPrices.create(adaptedData);
            }
          });
          break;
      }
    }
  }
}
