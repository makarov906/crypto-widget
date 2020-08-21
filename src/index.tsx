import * as React from "react";
import * as ReactDOM from "react-dom";
import { StoreProvider } from "./store";
import { App } from "./App";
import "./prepareDom";

const mountNode = document.getElementById("app");
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  mountNode
);
