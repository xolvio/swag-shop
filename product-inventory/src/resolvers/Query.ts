const resolvers = {
  Query: {
    productDetails: () => ({
      breadcrumbs: "Home  /  Men  /  New In  /  Xolvio oversized hoodie",
      product: {
        title: "Xolvio oversized hoodie",
        image:
          "https://raw.githubusercontent.com/rinorzk/xolvio-swag/refs/heads/main/xolvio-hoodie-black-front.jpg",
        price: 19.99,
        description:
          "Introducing our Oversized Hoodie with Print: This hoodie combines fleece fabric for ultimate comfort, an oversized fit for a relaxed look, and eye catching prints to express your style. With a kangaroo pocket for convenience, durable quality for longevity, and versatile styling options, it's the perfect addition to your wardrobe. Plus, it makes a great gift. Elevate your comfort and fashion game with this must-have hoodie today.",
        altImages: [
          {
            image:
              "https://raw.githubusercontent.com/rinorzk/xolvio-swag/refs/heads/main/xolvio-hoodie-black-back.jpg",
          },
          {
            image:
              "https://raw.githubusercontent.com/rinorzk/xolvio-swag/refs/heads/main/xolvio-hoodie-white-front.jpg",
          },
          {
            image:
              "https://raw.githubusercontent.com/rinorzk/xolvio-swag/refs/heads/main/xolvio-hoodie-white-back.jpg",
          },
        ],
        options: {
          colors: [{ name: "black" }, { name: "white" }],
          sizes: [
            { label: "XS" },
            { label: "S" },
            { label: "M" },
            { label: "L" },
          ],
        },
        inventory: { inStock: true },
        shipping: {
          minPrice: 3.99,
          minDeliveryDate: "Tomorrow, 26 August",
          orderDeadline: "10 hrs 46 min",
          freeReturns: true,
        },
      },
    }),
  },
};

export default resolvers;
