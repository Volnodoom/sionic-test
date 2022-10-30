import { ORM } from "redux-orm";
import { RootState } from "types/store.type";
import { Categories } from "./orm-models/categories";

const structure = {
  Categories,
};

export type Structure = typeof structure;

const orm: ORM<Structure> = new ORM<Structure>({
  stateSelector: (state: RootState) => state.entities,
});

orm.register(Categories);

export default orm
