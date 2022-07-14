export default {
  name: "cart",
  title: "Cart",
  type: "object",
  fields: [
    {
      name: "products",
      title: "Products",
      type: "array",
      options: {
        editModal: "popover",
      },
      of: [
        {
          name: "product",
          title: "Product",
          type: "reference",

          to: [
            {
              type: "product",
            },
          ],
        },
      ],
    },
  ],
  readOnly: true,
};
