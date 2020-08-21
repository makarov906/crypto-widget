import {Column} from 'src/models/columns/types';
import {DataState} from 'src/models/dataState/types';
import {Product} from 'src/models/product/types';
import {Tab} from 'src/models/tabs/types';

export type State = {
  products: Product[];
  productsState: DataState;

  altCoins: string[];
  usdCoins: string[];

  tab: Tab,
  alt: string | null,
  usd: string | null,

  search: string;
  additionalColumn: Column;
};

export type Actions = {
  loadProducts: () => void;
  toggleFavorite: (product: Product) => void;
  setTab: (tab: Tab) => void;
  setUsd: (value: string | null) => void;
  setAlt: (value: string | null) => void;
  setSearch: (value: string) => void;
  setAdditionalColumn: (column: Column) => void;
  updateProducts: (products: Partial<Product>[]) => void;
}

export type Store = {
  actions: Actions;
  state: State;
};
