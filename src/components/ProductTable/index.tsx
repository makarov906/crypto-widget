import React, { useMemo } from "react";
import { Table, TableColumn } from "src/components/Table";
import { Trend } from "src/components/Trend";
import { Column } from "src/models/columns/types";
import { Product } from "src/models/product/types";
import { productUtils } from "src/models/product/utils";
import { useStore } from "src/store";
import { filterProducts } from "./utils";
import { FavoriteIcon } from "./FavoriteIcon";
import styles from "./index.css";

export const ProductTable = () => {
  const { state, actions } = useStore();
  const filteredProducts = useMemo(() => filterProducts(state), [state]);

  const columns: TableColumn<Product>[] = [
    {
      id: "pair",
      title: "Pair",
      render: (product) => (
        <div className={styles.pairCell}>
          <FavoriteIcon
            active={productUtils.isFavorite(product)}
            onClick={() => actions.toggleFavorite(product)}
          />
          <div>
            <span className={styles.primary}>{product.baseAsset}</span>/{product.quoteAsset}
          </div>
        </div>
      ),
    },
    {
      id: "lastPrice",
      title: "Last Price",
      render: (product) => product.latestPrice.toFixed(8),
    },
  ];

  if (state.additionalColumn === Column.Change) {
    columns.push({
      id: "change",
      title: "Change",
      render: (product) => (
        <Trend value={productUtils.calculateChange(product)} />
      ),
    });
  }

  if (state.additionalColumn === Column.Volume) {
    columns.push({
      id: "volume",
      title: "Volume",
      render: (product) => product.volume,
    });
  }

  return (
    <Table
      data={filteredProducts}
      getKey={(product) => product.id}
      columns={columns}
    />
  );
};
