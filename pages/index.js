import React from "react";
import Head from "next/head";

import StockPage from "../src/stock/StockPage";


const Home = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Stock US Welcome</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <StockPage />
  </div>
)

export default Home
