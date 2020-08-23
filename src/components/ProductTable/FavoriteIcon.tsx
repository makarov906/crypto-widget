import React from "react";
import { StarIcon } from "../icons";
import styles from "./index.css";

type Props = {
  active: boolean;
  onClick: () => void;
};

export const FavoriteIcon = ({ active, onClick }: Props) => {
  const className = active
    ? `${styles.favoriteIcon} ${styles.favoriteIconActive}`
    : styles.favoriteIcon;

  return (
    <StarIcon
      className={className}
      onClick={onClick}
      data-testid="favoriteIcon"
    />
  );
};
