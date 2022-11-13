import { NonApiAction, OrmNameSpace } from "constants/store.const";
import Model, { attr, fk, ModelType, Session } from "redux-orm";
import { ActionType, ProductVarPropertyListServerType } from "types/global-types";
import GeneralUtils from "utils/general-utils";

export class ProductVarPropertyList extends Model {
  static modelName = OrmNameSpace.ProductVarPropertyList;
  static fields = {
    id: attr(),
    title: attr(),
    value: attr(),
    prodVarPropertyId: fk({
      to: OrmNameSpace.ProductVarProperty,
      as: 'propertyDetails',
      relatedName: 'propertyList'
    }),
  };

  static reducer(action: ActionType<ProductVarPropertyListServerType[]>, ProductVarPropertyList: ModelType<ProductVarPropertyList>, session: Session<any>): void {
    switch(action.type) {
      case NonApiAction.CreateProductVarPropertyList: {
        action.payload.forEach(piece => {
          const adaptedData = GeneralUtils.adaptClientProductVarProperty(piece);
          const currentData = ProductVarPropertyList.filter((line) => line.id === adaptedData.id).toRefArray();

          if(currentData.length === 0) {
            ProductVarPropertyList.create(piece);
          }
        });
        break;
      }
    }
  }
}
