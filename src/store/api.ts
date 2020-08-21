import {Product} from '../models/product/types';

// https://www.binance.com/
// due to CORS
const BASE_URL = "http://localhost:3000";

type Response = {
  data: {
    s: string;
    b: string;
    q: string;
    o: number;
    h: number;
    l: number;
    c: number;
    pm: string;
    pn: string;
    v: number;
  }[];
};

export const api = {
  getProducts: (): Promise<Product[]> => {
    return fetch(
      `${BASE_URL}/exchange-api/v1/public/asset-service/product/get-products`
    )
      .then((result) => result.json())
      .then((result: Response) => {
        return result.data.map((product) => ({
          id: product.s,
          baseAsset: product.b,
          quoteAsset: product.q,
          openPrice: product.o,
          highPrice: product.h,
          lowPrice: product.l,
          latestPrice: product.c,
          parentMarket: product.pm,
          parentMarketCategory: product.pn,
          volume: product.v,
        }));
      });
  },
};
