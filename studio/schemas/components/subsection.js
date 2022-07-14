import { ImImages } from "react-icons/im";

export default {
  name: "subsection",
  title: "Subsection",
  type: "object",
  icon: ImImages,
  fields: [
    {
      name: "subcategory",
      title: "Subcategory",
      type: "reference",
      to: [{ type: "subcategory" }],
    },

    {
      name: "products",
      title: "Products",
      type: "array",
      options: {
        editModal: "dialog",
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
          options: {
            filter: ({ document, parentPath }) => {
              const data = document.subsections.find(
                (s) => s._key === parentPath[1]._key
              );
              return {
                filter: "subcategory._ref == $subcategory",
                params: {
                  subcategory: data.subcategory._ref,
                },
              };
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.min(7).error("Minimum 7 products").warning("Minimum 7 products"),
    },
  ],
  preview: {
    select: {
      title: "subcategory.title",
    },
  },
};
