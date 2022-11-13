import { NonApiAction, OrmNameSpace } from "constants/store.const";
import Model, { attr, ModelType, Session } from "redux-orm";
import { ActionType, ProductVarPropertyType } from "types/global-types";

export class ProductVarProperty extends Model {
  static modelName = OrmNameSpace.ProductVarProperty;
  static fields = {
    id: attr(),
    name: attr(),
    type: attr(),
  };

  static reducer(action: ActionType<ProductVarPropertyType[]>, ProductVarProperty: ModelType<ProductVarProperty>, session: Session<any>): void {
    switch(action.type) {
      case NonApiAction.CreateProductVarProperty: {
        action.payload.forEach(piece => {
          const dataExist = ProductVarProperty.exists(piece);

          if(!dataExist) {
            ProductVarProperty.create(piece);
          }
        });
        break;
      }
    }
  }
}
