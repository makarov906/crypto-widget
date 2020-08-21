import React, { createContext, useContext, useMemo, useReducer } from "react";
import { Column } from "src/models/columns/types";
import { Tab } from "src/models/tabs/types";
import { DataState } from "../models/dataState/types";
import {
  loadProducts,
  setAlt,
  setTab,
  setUsd,
  toggleFavorite,
  setAdditionalColumn,
  setSearch,
  updateProducts,
} from "./actions";
import { Actions, State, Store } from "./types";

const initialState: State = {
  products: [],
  productsState: DataState.Idle,

  altCoins: [],
  usdCoins: [],

  tab: Tab.Bnb,
  alt: null,
  usd: null,

  search: "",
  additionalColumn: Column.Change,
};

const context = createContext<Store>({} as Store);

const reducer = (
  state: State,
  patch: Partial<State> | ((state: State) => Partial<State>)
): State => ({
  ...state,
  ...(typeof patch === "function" ? patch(state) : patch),
});

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = useMemo<Actions>(
    () => ({
      loadProducts: () => loadProducts(dispatch),
      toggleFavorite: (product) => toggleFavorite(product, dispatch),
      setTab: (tab) => setTab(tab, dispatch),
      setAlt: (value) => setAlt(value, dispatch),
      setUsd: (value) => setUsd(value, dispatch),
      setSearch: (value) => setSearch(value, dispatch),
      setAdditionalColumn: (column) => setAdditionalColumn(column, dispatch),
      updateProducts: (products) => updateProducts(products, dispatch),
    }),
    []
  );

  return (
    <context.Provider value={{ state, actions }}>{children}</context.Provider>
  );
};

export const useStore = () => useContext(context);
