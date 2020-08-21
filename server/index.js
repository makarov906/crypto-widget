const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(cors());

app.get(
  "/exchange-api/v1/public/asset-service/product/get-products",
  (req, res) => {
    axios(
      "https://www.binance.com/exchange-api/v1/public/asset-service/product/get-products"
    ).then((result) => {
      return res.json(result.data);
    });
  }
);

process.on("unhandledRejection", (reason, promise) => {
  console.log(reason, promise);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
