const resolvers = {
  Query: {
    header: () => ({
      cart: { itemCount: 2 },
    }),
    categoryBar: () => ({
      categories: [
        { label: "Sales", url: "/sales" },
        { label: "Woman", url: "/woman" },
        { label: "Men", url: "/men" },
        { label: "Boys", url: "/boys" },
        { label: "Girls", url: "/girls" },
        { label: "Baby", url: "/baby" },
        { label: "Sports", url: "/sports" },
        { label: "Home", url: "/home" },
        { label: "Autumn", url: "/autumn" },
        { label: "Christmas", url: "/christmas" },
        { label: "Brands", url: "/brands" },
        { label: "Beauty", url: "/beauty" },
        { label: "Gifts & Flowers", url: "/gifts-flowers" },
      ],
    }),
    similarProducts: () => ({
      products: [
        {
          liked: false,
          image:
            "https://raw.githubusercontent.com/rinorzk/xolvio-swag/refs/heads/main/xolvio-hoodie-2-black.jpg",
          title: "Xolvio hoodie",
          price: 24.99,
          options: {
            colors: [{ name: "Black" }, { name: "White" }],
            sizes: [
              { label: "XS" },
              { label: "S" },
              { label: "M" },
              { label: "L" },
            ],
          },
        },
        {
          liked: false,
          image:
            "https://raw.githubusercontent.com/rinorzk/xolvio-swag/refs/heads/main/xolvio-hoodie-3-black.jpg",
          title: "Xolvio hoodie",
          price: 18.99,
          options: {
            colors: [{ name: "Black" }, { name: "White" }],
            sizes: [
              { label: "XS" },
              { label: "S" },
              { label: "M" },
              { label: "L" },
            ],
          },
        },
        {
          liked: false,
          image:
            "https://raw.githubusercontent.com/rinorzk/xolvio-swag/refs/heads/main/xolvio-polo-white.jpg",
          title: "Xolvio polo shirt",
          price: 22.99,
          options: {
            colors: [{ name: "White" }, { name: "Blue" }],
            sizes: [{ label: "S" }, { label: "M" }, { label: "L" }],
          },
        },
        {
          liked: false,
          image:
            "https://raw.githubusercontent.com/rinorzk/xolvio-swag/refs/heads/main/xolvio-shirt-2-white.jpg",
          title: "Xolvio t-shirt",
          price: 14.99,
          options: {
            colors: [{ name: "White" }],
            sizes: [{ label: "M" }, { label: "L" }],
          },
        },
      ],
    }),
  },
};

export default resolvers;
