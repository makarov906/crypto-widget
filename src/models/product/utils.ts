import { Product, isFavorite } from "./types";

export const productUtils = {
  isFavorite(product: Product): boolean {
    return !!product[isFavorite];
  },
  toggleFavorite(product: Product): Product {
    return {
      ...product,
      [isFavorite]: !product[isFavorite],
    };
  },
  setFavorite(product: Product, value: boolean): Product {
    return {
      ...product,
      [isFavorite]: value,
    };
  },
  calculateChange(product: Product): number {
    return (product.openPrice - product.latestPrice) / product.openPrice;
  },
};
