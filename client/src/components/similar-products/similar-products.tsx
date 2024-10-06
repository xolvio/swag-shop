import { Box, Stack, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export interface SimilarProductsProps {
  products: {
    liked: boolean;
    image: string;
    title: string;
    price: number;
    options: {
      colors: number;
    };
  }[];
}

export const SimilarProducts = (props: SimilarProductsProps) => {
  const { products } = props;

  return (
    <Box width="100%" my={5}>
      <Typography
        maxWidth={"1200px"}
        mx="auto"
        px={3}
        mb={3}
        variant="h4"
        component="div"
      >
        Similar Products
      </Typography>
      <Stack
        maxWidth={"1200px"}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={3}
        py={3}
        mx="auto"
        gap={3}
      >
        {products.map((product) => (
          <Box
            key={product.title + product.price}
            sx={{ position: "relative" }}
          >
            <Box
              sx={{
                height: "350px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #ededed",
              }}
            >
              <img src={product.image} alt={product.title} width={"100%"} />
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              my={2}
            >
              <Typography>{product.title}</Typography>
              <Typography>{product.options.colors} colors</Typography>
            </Box>
            <Typography fontWeight={"600"}>${product.price}</Typography>
            <Box
              sx={{
                position: "absolute",
                backgroundColor: "white",
                width: "30px",
                height: "30px",
                borderRadius: "30px",
                top: "20px",
                right: "20px",
              }}
            >
              <FavoriteBorderOutlinedIcon sx={{ color: "rgb(89, 192, 152)" }} />
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
