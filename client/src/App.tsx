import React from "react";
import { useQuery } from "@apollo/client";
import { SWAG_SHOP_EXPERIENCE } from "./queries";
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
import staticData from "./mock-data.json";

function App() {
  const { loading, error, data } = useQuery(SWAG_SHOP_EXPERIENCE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data) {
    console.log("Fetched data:", data);
  }

  const typedData = {
    header: staticData.header as unknown,
    categoryBar: staticData.categoryBar as unknown,
    productDetails: data.swagShopExperience?.productDetails,
    subscribeBar: staticData.subscribeBar as unknown,
    similarProducts: data.swagShopExperience?.similarProducts,
    footer: staticData.footer as unknown,
  } as {
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
