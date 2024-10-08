import { gql } from "@apollo/client";

export const SWAG_SHOP_EXPERIENCE = gql`
  query SwagShopExperience {
      productDetails {
        breadcrumbs
        product {
          title
          image
          price
          altImages {
            image
          }
          options {
            colors {
              name
            }
            sizes {
              label
            }
          }
          inventory {
            inStock
          }
          shipping {
            minPrice
            minDeliveryDate
            orderDeadline
            freeReturns
          }
        }
      }
      similarProducts {
        products {
          liked
          image
          title
          price
          options {
            colors {
              name
            }
          }
        }
      }
    }
`;
