import { ORM } from "redux-orm";
import { RootState } from "types/store.type";
import { Categories } from "./orm-models/categories";
import { Products } from "./orm-models/products";
import { Images } from "./orm-models/images";
import { StockPrices } from "./orm-models/stock-prices";

const structure = {
  Categories,
  Products,
  Images,
  StockPrices,
};

export type Structure = typeof structure;

const orm: ORM<Structure> = new ORM<Structure>({
  stateSelector: (state: RootState) => state.entities,
});

orm.register(
  Categories,
  Products,
  Images,
  StockPrices
);

export default orm
