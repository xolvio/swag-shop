import { gql } from '@apollo/client';

export const GET_SWAG_SHOP_EXPERIENCE = gql`
  query GetSwagShopExperience {
    swagShopExperience {
      header {
        cart {
          itemCount
        }
      }
      categoryBar {
        categories {
          label
          url
        }
      }
      productDetails {
        breadcrumbs
        product {
          title
          image
          price
          description
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
      subscribeBar {
        content {
          header
          copy
        }
      }
      footer {
        categories {
          category
          links {
            label
            url
          }
        }
        phone
        email
        copyrights
        address
      }
    }
  }
`;