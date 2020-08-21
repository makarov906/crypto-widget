import { uniq } from "src/helpers/uniq";
import { ParentMarket } from "src/models/coins/types";
import { Column } from "src/models/columns/types";
import { DataState } from "src/models/dataState/types";
import { isFavorite, Product } from "src/models/product/types";
import { productUtils } from "src/models/product/utils";
import { Tab } from "src/models/tabs/types";
import { api } from "src/store/api";
import { State } from "./types";

type Dispatch = (
  patch: Partial<State> | ((state: State) => Partial<State>)
) => void;

export function loadProducts(dispatch: Dispatch) {
  dispatch({ productsState: DataState.Loading });
  api
    .getProducts()
    .then((products) =>
      products.map((product) => ({
        ...product,
        [isFavorite]: false,
      }))
    )
    .then((products) =>
      dispatch({
        productsState: DataState.Loaded,
        products,
        altCoins: uniq(
          products
            .filter((product) => product.parentMarket === ParentMarket.Alts)
            .map((product) => product.quoteAsset)
        ),
        usdCoins: uniq(
          products
            .filter((product) => product.parentMarket === ParentMarket.Usd)
            .map((product) => product.quoteAsset)
        ),
      })
    )
    .catch(() => dispatch({ productsState: DataState.Failed }));
}

export function toggleFavorite(product: Product, dispatch: Dispatch) {
  dispatch((state) => ({
    products: state.products.map((pr) =>
      pr.id === product.id ? productUtils.toggleFavorite(pr) : pr
    ),
  }));
}

export function setTab(tab: Tab, dispatch: Dispatch) {
  dispatch({
    tab,
  });
}

export function setAlt(value: string | null, dispatch: Dispatch) {
  dispatch({
    tab: Tab.Alts,
    alt: value,
  });
}

export function setUsd(value: string | null, dispatch: Dispatch) {
  dispatch({
    tab: Tab.Usd,
    usd: value,
  });
}

export function setSearch(value: string, dispatch: Dispatch) {
  dispatch({
    search: value,
  });
}

export function setAdditionalColumn(column: Column, dispatch: Dispatch) {
  dispatch({
    additionalColumn: column,
  });
}

export function updateProducts(
  newProducts: Partial<Product>[],
  dispatch: Dispatch
) {
  dispatch(state => ({
    products: state.products.map((product) => {
      const updatedProduct = newProducts.find(
        (newProduct) => newProduct.id === product.id
      );
      if (updatedProduct) {
        return {
          ...product,
          ...updatedProduct,
        };
      }

      return product;
    }),
  }));
}
