import React from "react";
import styles from "./index.css";

export type TableColumn<T> = {
  id: string;
  title: string;
  render: (value: T) => React.ReactNode;
};

type Props<T> = {
  data: T[];
  getKey: (value: T) => string;
  columns: TableColumn<T>[];
};

export function Table<T>({ data, columns, getKey }: Props<T>) {
  const columnCount = columns.length;
  const cellWidth = `${100 / columnCount}%`;

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.row}>
          {columns.map((column) => (
            <div
              style={{
                width: cellWidth,
              }}
              className={styles.cell}
              key={column.id}
            >
              {column.title}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.body}>
        {data.map((item) => (
          <div className={styles.row} key={getKey(item)} data-testid="tableRow">
            {columns.map((column) => (
              <div
                style={{
                  width: cellWidth,
                }}
                className={styles.cell}
                key={column.id}
              >
                {column.render(item)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
