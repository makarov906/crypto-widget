export const isFavorite = Symbol('isFavorite');
export type Product = {
  id: string;
  baseAsset: string;
  quoteAsset: string;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  latestPrice: number;
  parentMarket: string;
  parentMarketCategory: string;
  volume: number;
  [isFavorite]?: boolean;
};
