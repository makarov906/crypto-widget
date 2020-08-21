import { DependencyList, useEffect } from "react";
import { Product } from "src/models/product/types";
import WS from "reconnectingwebsocket";

const socketUrl = "wss://stream.binance.com/stream?streams=!miniTicker@arr";

type Response = {
  data: {
    s: string;
    o: string;
    h: string;
    l: string;
    c: string;
    v: string;
  }[];
};

export function useProductSubscription(
  onMessage: (product: Partial<Product>[]) => void,
  deps: DependencyList
) {
  useEffect(() => {
    const socket = new WS(socketUrl);
    socket.addEventListener("message", (message) => {
      try {
        const { data } = JSON.parse(message.data) as Response;
        onMessage(
          data.map((product) => ({
            id: product.s,
            openPrice: parseFloat(product.o),
            highPrice: parseFloat(product.h),
            lowPrice: parseFloat(product.l),
            latestPrice: parseFloat(product.c),
            volume: parseFloat(product.v),
          }))
        );
      } catch (error) {}
    });
    return () => {
      socket.close();
    };
  }, deps);
}
