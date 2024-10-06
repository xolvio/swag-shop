import React from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./mock-data.json";
import {
  SwagShopHeader,
  SwagShopHeaderProps,
} from "./components/header/header";
import {
  CategoryBar,
  CategoryBarProps,
} from "./components/category-bar/category-bar";
import {
  ProductDetails,
  ProductDetailsProps,
} from "./components/product-details/product-details";
import {
  SubscribeBar,
  SubscribeBarProps,
} from "./components/subscribe-bar/subscribe-bar";
import {
  SimilarProducts,
  SimilarProductsProps,
} from "./components/similar-products/similar-products";
import {
  SwagShopFooter,
  SwagShopFooterProps,
} from "./components/footer/footer";
import { Box } from "@mui/material";

function App() {
  const typedData = data as unknown as {
    header: SwagShopHeaderProps;
    categoryBar: CategoryBarProps;
    productDetails: ProductDetailsProps;
    subscribeBar: SubscribeBarProps;
    similarProducts: SimilarProductsProps;
    footer: SwagShopFooterProps;
  };

  return (
    <Box>
      <SwagShopHeader {...typedData.header} />
      <CategoryBar {...typedData.categoryBar} />
      <ProductDetails {...typedData.productDetails} />
      <SimilarProducts {...typedData.similarProducts} />
      <SubscribeBar {...typedData.subscribeBar} />
      <SwagShopFooter {...typedData.footer} />
    </Box>
  );
}

export default App;
