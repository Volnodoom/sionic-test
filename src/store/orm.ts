import { ORM } from "redux-orm";
import { RootState } from "types/store.type";
import { Categories } from "./orm-modules-data/categories";
import { Products } from "./orm-modules-data/products";
import { Images } from "./orm-modules-data/images";
import { StockPrices } from "./orm-modules-data/stock-prices";
import { ProductVarList } from "./orm-modules-data/product-var-list";
import { ProductVarPropertyList } from "./orm-modules-data/product-var-property-list";
import { ProductVarProperty } from "./orm-modules-data/product-var-propperty";

const structure = {
  Categories,
  Products,
  Images,
  StockPrices,
  ProductVarList,
  ProductVarPropertyList,
  ProductVarProperty,
};

export type Structure = typeof structure;

const orm: ORM<Structure> = new ORM<Structure>({
  stateSelector: (state: RootState) => state.entities,
});

orm.register(
  Categories,
  Products,
  Images,
  StockPrices,
  ProductVarList,
  ProductVarPropertyList,
  ProductVarProperty,
);

export default orm
