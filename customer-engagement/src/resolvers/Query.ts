// @ts-nocheck
const resolvers = {
  Query: {
    swagShopExperience: () => ({
      slug: "hoodie-123",
      header: {
        cart: {
          itemCount: 2,
        },
      },
      categoryBar: {
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
      },
      productDetails: () => resolvers.Query.productDetails(),
      similarProducts: () => resolvers.Query.similarProducts(),
      subscribeBar: {
        content: {
          header: "Subscribe to our newsletter",
          copy: "and get a 10% discount on your first purchase!",
        },
      },
      footer: {
        categories: [
          {
            category: "For buyers",
            links: [
              { label: "Payment", url: "/payment" },
              { label: "Personal Data Policy", url: "/personal-data-policy" },
              { label: "Actions", url: "/actions" },
              { label: "Gift Certificates", url: "/gift-certificates" },
            ],
          },
          {
            category: "",
            links: [
              { label: "Affiliate Program", url: "/affiliate-program" },
              {
                label: "Rules for Using Promotional Codes",
                url: "/rules-promotional-codes",
              },
            ],
          },
          {
            category: "About Xolvio",
            links: [
              { label: "About Us", url: "/about-us" },
              { label: "Contact Us", url: "/contact-us" },
              { label: "News", url: "/news" },
              { label: "Vacancies", url: "/vacancies" },
            ],
          },
        ],
        phone: "(415) 857-1317",
        email: "contact@xolv.io",
        copyrights: "All Rights Reserved. Xolvio, Inc.",
        address: "San Fransisco",
      },
    }),

    productDetails: () => ({
      breadcrumbs: "Home  /  Men  /  New In  /  Xolvio oversized hoodie",
      product: {
        title: "Xolvio oversized hoodie",
        image:
            "https://raw.githubusercontent.com/rinorzk/xolvio-swag/refs/heads/main/xolvio-hoodie-black-front.jpg",
        price: 19.99,
        description:
            "Introducing our Oversized Hoodie with Print: This hoodie combines fleece fabric for ultimate comfort, an oversized fit for a relaxed look, and eye-catching prints to express your style. With a kangaroo pocket for convenience, durable quality for longevity, and versatile styling options, it's the perfect addition to your wardrobe. Plus it makes a great gift. Elevate your comfort and fashion game with this must-have hoodie today.",
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
        inventory: {
          inStock: true,
        },
        shipping: {
          minPrice: 3.99,
          minDeliveryDate: "Tomorrow, 26 August",
          orderDeadline: "10 hrs 46 min",
          freeReturns: true,
        },
      },
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
            colors: [{ name: "black" }, { name: "white" }],
          },
        },
        {
          liked: false,
          image:
              "https://raw.githubusercontent.com/rinorzk/xolvio-swag/refs/heads/main/xolvio-hoodie-3-black.jpg",
          title: "Xolvio hoodie",
          price: 18.99,
          options: {
            colors: [{ name: "black" }, { name: "white" }],
          },
        },
        {
          liked: false,
          image:
              "https://raw.githubusercontent.com/rinorzk/xolvio-swag/refs/heads/main/xolvio-polo-white.jpg",
          title: "Xolvio polo shirt",
          price: 22.99,
          options: {
            colors: [{ name: "white" }, { name: "blue" }],
          },
        },
        {
          liked: false,
          image:
              "https://raw.githubusercontent.com/rinorzk/xolvio-swag/refs/heads/main/xolvio-shirt-2-white.jpg",
          title: "Xolvio t-shirt",
          price: 14.99,
          options: {
            colors: [{ name: "white" }],
          },
        },
      ],
    }),
  },
};

export default resolvers;
