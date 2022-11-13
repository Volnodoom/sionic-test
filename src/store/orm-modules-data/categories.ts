import { NonApiAction, OrmNameSpace } from "constants/store.const";
import Model, { attr, ModelType, Session } from "redux-orm";
import { ActionType, CategoryType } from "types/global-types";

export class Categories extends Model {
  static modelName = OrmNameSpace.Categories;
  static fields = {
    id: attr(),
    name: attr(),
  };

  static reducer(action: ActionType<CategoryType[]>, Categories: ModelType<Categories>, session: Session<any>): void {
    switch(action.type) {
      case NonApiAction.CreateCategories: {
          const dataExist = Categories.exists(action.payload[0]);

          if(!dataExist) {
            action.payload.forEach(piece => {
              Categories.create(piece);
            });
          }
          break;
      }
    }
  }
}
