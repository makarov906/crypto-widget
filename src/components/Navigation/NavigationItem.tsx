import React from "react";
import styles from "./index.css";

type Props = {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  testId: string;
};

export const NavigationItem = ({
  children,
  active,
  onClick,
  testId,
}: Props) => {
  const className = active
    ? `${styles.item} ${styles.itemActive}`
    : styles.item;

  return (
    <div onClick={onClick} className={className} data-testid={testId}>
      {children}
    </div>
  );
};
