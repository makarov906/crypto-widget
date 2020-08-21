import { Tab } from "src/models/tabs/types";
import { State } from "src/store/types";
import { Coin, ParentMarket } from "src/models/coins/types";
import { Product } from "src/models/product/types";
import { productUtils } from "src/models/product/utils";

function filterByTab(state: State) {
  if (state.tab === Tab.Favorite) {
    return state.products.filter(productUtils.isFavorite);
  }

  if (state.tab === Tab.Bnb) {
    return state.products.filter((product) => product.quoteAsset === Coin.Bnb);
  }

  if (state.tab === Tab.Btc) {
    return state.products.filter((product) => product.quoteAsset === Coin.Btc);
  }

  if (state.tab === Tab.Alts) {
    if (state.alt) {
      return state.products.filter(
        (product) => product.quoteAsset === state.alt
      );
    }

    return state.products.filter(
      (product) => product.parentMarket === ParentMarket.Alts
    );
  }

  if (state.tab === Tab.Usd) {
    if (state.usd) {
      return state.products.filter(
        (product) => product.quoteAsset === state.usd
      );
    }

    return state.products.filter(
      (product) => product.parentMarket === ParentMarket.Usd
    );
  }

  return [];
}

export function filterProducts(state: State): Product[] {
  const products = filterByTab(state);
  if (state.search) {
    return products.filter((product) =>
      product.baseAsset.toLowerCase().startsWith(state.search.toLowerCase())
    );
  }

  return products;
}
