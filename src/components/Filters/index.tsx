import React from "react";
import { Column } from "src/models/columns/types";
import { useStore } from "src/store";
import styles from "./index.css";

export const Filters = () => {
  const { actions, state } = useStore();

  return (
    <div className={styles.filters}>
      <input
        placeholder="Search"
        type="text"
        value={state.search}
        onChange={(e) => actions.setSearch(e.target.value)}
      />
      <label className={styles.radio}>
        <input
          type="radio"
          name="additionalColumn"
          value={Column.Change}
          checked={state.additionalColumn === Column.Change}
          onChange={() => actions.setAdditionalColumn(Column.Change)}
        />
        Change
      </label>
      <label className={styles.radio}>
        <input
          type="radio"
          name="additionalColumn"
          value={Column.Volume}
          checked={state.additionalColumn === Column.Volume}
          onChange={() => actions.setAdditionalColumn(Column.Volume)}
        />
        Volume
      </label>
    </div>
  );
};
