import { NonApiAction, OrmNameSpace } from "constants/store.const";
import Model, { attr, fk, ModelType, Session } from "redux-orm";
import { ActionType, ProductVarListServerType } from "types/global-types";
import GeneralUtils from "utils/general-utils";

export class ProductVarList extends Model {
  static modelName = OrmNameSpace.ProductVarList;
  static fields = {
    id: attr(),
    valueString: attr(),
    valueInt: attr(),
    valueFloat: attr(),
    prodVarPropListId: attr(),
    prodVarPropId: fk({
      to: OrmNameSpace.ProductVarProperty,
      as: 'productVarProperty',
      relatedName: 'productVarList'
    }),
    prodVarId: fk({
      to: OrmNameSpace.Products,
      as: 'productVar',
      relatedName: 'productVarList'
    }),
  };

  static reducer(action: ActionType<ProductVarListServerType[]>, ProductVarList: ModelType<ProductVarList>, session: Session<any>): void {
    switch(action.type) {
      case NonApiAction.CreateProductVarList: {
          action.payload.forEach(piece => {
            const adaptedData = GeneralUtils.adaptClientProductVariationList(piece);
            const dataExist = ProductVarList.exists(adaptedData);

            if(!dataExist) {
              ProductVarList.create(adaptedData);
            }
          });
          break;
      }
    }
  }
}
