import React from "react";
import { Tab } from "src/models/tabs/types";
import { useStore } from "src/store";
import {Coin, ParentMarket} from 'src/models/coins/types';
import styles from "./index.css";
import { StarIcon } from "../icons";
import { NavigationItem } from "./NavigationItem";
import { NavigationSelectItem } from "./NavigationSelectItem";

export const Navigation = () => {
  const { state, actions } = useStore();

  return (
    <div className={styles.navigation}>
      <NavigationItem
        active={state.tab === Tab.Favorite}
        onClick={() => actions.setTab(Tab.Favorite)}
        testId="favoriteTab"
      >
        <StarIcon />
      </NavigationItem>
      <NavigationItem
        active={state.tab === Tab.Margin}
        onClick={() => actions.setTab(Tab.Margin)}
        testId="marginTab"
      >
        Margin
      </NavigationItem>
      <NavigationItem
        active={state.tab === Tab.Bnb}
        onClick={() => actions.setTab(Tab.Bnb)}
        testId="bnbTab"
      >
        {Coin.Bnb}
      </NavigationItem>
      <NavigationItem
        active={state.tab === Tab.Btc}
        onClick={() => actions.setTab(Tab.Btc)}
        testId="btcTab"
      >
        {Coin.Btc}
      </NavigationItem>
      <NavigationSelectItem
        active={state.tab === Tab.Alts}
        value={state.alt}
        options={state.altCoins}
        onChange={actions.setAlt}
        resetValue={ParentMarket.Alts}
      />
      <NavigationSelectItem
        active={state.tab === Tab.Usd}
        value={state.usd}
        options={state.usdCoins}
        onChange={actions.setUsd}
        resetValue={ParentMarket.Usd}
      />
    </div>
  );
};
