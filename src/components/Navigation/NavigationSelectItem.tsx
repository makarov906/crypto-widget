import React from 'react';
import styles from './index.css';

type Props = {
  value: string | null;
  options: string[];
  active: boolean;
  onChange: (value: string | null) => void;
  resetValue: string;
};

export const NavigationSelectItem = ({value, options, active, onChange, resetValue}: Props) => {
  const className = active
    ? `${styles.item} ${styles.itemActive}`
    : styles.item;

  return (
    <div className={styles.dropdownContainer}>
      <div className={className}>{value || resetValue}</div>
      <div className={styles.dropdown}>
        <div onClick={() => onChange(null)} className={styles.option}>
          {resetValue}
        </div>
        {options.map((option) => (
          <div key={option} onClick={() => onChange(option)} className={styles.option}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
