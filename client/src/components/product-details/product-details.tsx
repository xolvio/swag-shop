import { Box, Button, Stack, Typography } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export interface ProductDetailsProps {
  breadcrumbs: string;
  product: {
    title: string;
    description: string;
    price: number;
    image: string;
    altImages: { image: string }[];
    options: { sizes: { label: string }[]; colors: { name: string }[] };
    inventory: { inStock: boolean };
    shipping: {
      minPrice: number;
      maxDeliveryDate: string;
      orderDeadline: string;
      freeReturns: boolean;
    };
  };
}

export const ProductDetails = (props: ProductDetailsProps) => {
  const { breadcrumbs, product } = props;

  return (
    <Box width="100%" mb={2}>
      <Stack maxWidth={"1200px"} px={3} py={3} mx="auto">
        <Box>{breadcrumbs}</Box>
        <Stack direction={"row"} gap={4} my={5}>
          <Box width={"50%"}>
            <img src={product.image} alt={product.title} width={"100%"} />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              {product.altImages.map((altImage) => (
                <Box width={"30%"} key={altImage.image}>
                  <img src={altImage.image} width={"100%"} />
                </Box>
              ))}
            </Stack>
          </Box>
          <Box width={"50%"}>
            <Typography variant={"h5"} fontWeight={"600"} my={5}>
              {product.title}
            </Typography>
            <Typography variant={"h5"} fontWeight={"600"} my={5}>
              ${product.price}
            </Typography>
            <Box my={3}>
              <Typography variant={"body1"}>Color:</Typography>
              <Stack direction={"row"} gap={2} mt={1.5}>
                {product.options.colors.map((color) => (
                  <Box
                    key={color.name}
                    sx={{
                      backgroundColor: color.name,
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid #dedede",
                      cursor: "pointer",
                    }}
                  ></Box>
                ))}
              </Stack>
            </Box>
            <Box my={4}>
              <Typography variant={"body1"}>Size:</Typography>
              <Stack direction={"row"} gap={2} mt={2}>
                {product.options.sizes.map((size) => (
                  <Box
                    key={size.label}
                    sx={{
                      width: "55px",
                      height: "40px",
                      borderRadius: "20px",
                      border: "1px solid #dedede",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant={"body2"} width={"auto"}>
                      {size.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"flex-start"}
              gap={1}
              my={4}
            >
              {product.inventory.inStock ? (
                <CheckCircleOutlineOutlinedIcon sx={{ color: "green" }} />
              ) : (
                <CancelOutlinedIcon sx={{ color: "red" }} />
              )}
              {product.inventory.inStock ? "Item in stock" : "Out of stock"}
            </Box>
            <Box
              sx={{
                backgroundColor: "#e5eae6",
                padding: 3,
                borderRadius: "8px",
              }}
            >
              <Stack direction={"row"} gap={3}>
                <LocalShippingOutlinedIcon
                  fontSize={"large"}
                  sx={{ color: "rgb(89, 192, 152)" }}
                />
                <Box>
                  <Typography>
                    By courier to the door - from {product.shipping.minPrice}
                  </Typography>
                  <Typography>
                    Or fastest delivery {product.shipping.maxDeliveryDate}
                  </Typography>
                  <Typography>
                    Order within {product.shipping.orderDeadline}
                  </Typography>
                </Box>
              </Stack>
              <Stack direction={"row"} gap={3} mt={2}>
                <Inventory2OutlinedIcon
                  fontSize={"large"}
                  sx={{ color: "rgb(89, 192, 152)" }}
                />
                <Box>
                  <Typography>
                    By courier to the door - from {product.shipping.minPrice}
                  </Typography>
                  <Typography>
                    Or fastest delivery {product.shipping.maxDeliveryDate}
                  </Typography>
                  <Typography>
                    Order within {product.shipping.orderDeadline}
                  </Typography>
                </Box>
              </Stack>
            </Box>
            <Stack
              direction={"row"}
              my={4}
              gap={3}
              justifyContent={"space-between"}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 1,
                  border: "1px solid black",
                  borderRadius: "30px",
                  height: "50px",
                }}
              >
                <Button
                  sx={{
                    color: "black",
                    "&:hover": {
                      backgroundColor: "transparent",
                      opacity: 1,
                    },
                  }}
                >
                  -
                </Button>
                <Button
                  sx={{
                    color: "black",
                    "&:hover": {
                      backgroundColor: "transparent",
                      opacity: 1,
                    },
                  }}
                >
                  1
                </Button>
                <Button
                  sx={{
                    color: "black",
                    "&:hover": {
                      backgroundColor: "transparent",
                      opacity: 1,
                    },
                  }}
                >
                  +
                </Button>
              </Box>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "rgb(89, 192, 152)",
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  borderRadius: "30px",
                  flex: 1,
                  "&:hover": {
                    backgroundColor: "rgb(89, 192, 152)",
                    opacity: 1,
                  },
                }}
              >
                <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
                <Typography fontSize={"14px"}>Add To Cart</Typography>
              </Button>
            </Stack>
          </Box>
        </Stack>
        <Box my={3}>
          <Typography variant={"h5"} mb={3} fontWeight={"500"}>
            Description
          </Typography>
          {product.description}
        </Box>
      </Stack>
    </Box>
  );
};
