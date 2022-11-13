import { NonApiAction, OrmNameSpace } from "constants/store.const";
import Model, { attr, ModelType, oneToOne, Session } from "redux-orm";
import { ActionType, ImageServerType } from "types/global-types";
import GeneralUtils from "utils/general-utils";

export class Images extends Model {
  static modelName = OrmNameSpace.Images;
  static fields = {
    id: attr(),
    name: attr(),
    imageUrl: attr(),
    productId: oneToOne({
      to: OrmNameSpace.Products,
      as: 'productInfo',
      relatedName: 'image'
    }),
  };

  static reducer(action: ActionType<ImageServerType[]>, Images: ModelType<Images>, session: Session<any>): void {
    switch(action.type) {
      case NonApiAction.CreateImages: {
          action.payload.forEach(piece => {
            const adaptedData = GeneralUtils.adaptClientImage(piece);
            const dataExist = Images.exists(adaptedData);

            if(!dataExist) {
              Images.create(adaptedData);
            }
          });
          break;
      }
    }
  }
}
