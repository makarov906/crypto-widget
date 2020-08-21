import React from "react";
import styles from './index.css';

export const ProductMarket = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.market}>
      <h1 className={styles.title}>Market</h1>
      {children}
    </div>
  );
};
