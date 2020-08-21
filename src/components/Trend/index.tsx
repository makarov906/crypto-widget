import React from "react";
import { round } from "src/helpers/round";
import styles from "./index.css";

type Props = {
  value: number;
};

function formatPercent(value: number): string {
  return `${round(value * 100, 2)}%`;
}

export const Trend = ({ value }: Props) => {
  if (value > 0) {
    return <div className={styles.green}>+{formatPercent(value)}</div>;
  }

  return <div className={styles.red}>{formatPercent(value)}</div>;
};
