import { NonApiAction, StoreNameSpace } from "constants/store.const";
import Model, { attr, ModelType, oneToOne, Session } from "redux-orm";
import { ActionType, ProductServerType } from "types/global-types";
import GeneralUtils from "utils/general-utils";

export class Products extends Model {
  static modelName = StoreNameSpace.Products;
  static fields = {
    id: attr(),
    name: attr(),
    description: attr(),
    categoryId: oneToOne({
      to: StoreNameSpace.Categories,
      as: 'category',
      relatedName: 'productList'
    }),
  };

  static reducer(action: ActionType<ProductServerType[]>, Products: ModelType<Products>, session: Session<any>): void {
    switch(action.type) {
      case NonApiAction.CreateProducts: {
          action.payload.forEach(piece => {
            const adaptedData = GeneralUtils.adaptClientProduct(piece);
            const dataExist = Products.exists(adaptedData);

            if(!dataExist) {
              Products.create(adaptedData);
            }
          });
          break;
      }
    }
  }
}
