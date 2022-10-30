import { StoreNameSpace } from 'constants/store.const';
import { createSelector } from 'redux-orm';
import orm from 'store/orm';

// @ts-ignore: Expect additional argument to create selector
export const getCategory = createSelector(orm[StoreNameSpace.Categories]);


