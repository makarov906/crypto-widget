import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { Filters } from "src/components/Filters";
import { Navigation } from "src/components/Navigation";
import { ProductTable } from "src/components/ProductTable";
import { useProductSubscription } from "src/hooks/useProductSubscription";
import { useStore } from "./store";
import { ProductMarket } from "./components/ProductMarket";

const Root = () => {
  const { actions } = useStore();

  useEffect(() => {
    actions.loadProducts();
  }, []);

  useProductSubscription(
    (products) => {
      actions.updateProducts(products);
    },
    [actions.updateProducts]
  );

  return (
    <ProductMarket>
      <Navigation />
      <Filters />
      <ProductTable />
    </ProductMarket>
  );
};

export const App = hot(Root);
