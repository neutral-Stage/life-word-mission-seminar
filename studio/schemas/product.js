import { SiProducthunt } from "react-icons/si";

export default {
  name: "product",
  title: "Product",
  type: "document",
  icon: SiProducthunt,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subcategory",
      title: "Subcategory",
      type: "reference",
      to: [{ type: "subcategory" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Feature Image",

      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "stock",
      title: "Stock",
      type: "number",
    },
    {
      name: "currentlyNotInStock",
      title: "Currently Not In Stock",
      type: "boolean",
    },
    {
      name: "hide",
      title: "Hide This Product",
      type: "boolean",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "discountPrice",
      title: "Discount Price",
      type: "number",
    },
    {
      name: "discountPriceList",
      title: "Discount Price List",
      type: "array",
      of: [{ type: "number" }],
      validation: (Rule) =>
        Rule.max(3)
          .error("Max discount price list 3")
          .warning("Max discount list 3"),
    },
    {
      title: "Description",
      name: "description",
      type: "blockContent",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "vendor",
      title: "Vendor",
      type: "reference",
      to: [{ type: "vendor" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  initialValue: {
    stock: 99,
  },

  preview: {
    select: {
      title: "title",
      vendor: "vendor.title",
      image: "image.0.asset",
    },
    prepare({ title, vendor, image }) {
      return {
        title: title,
        subtitle: vendor,
        media: image,
      };
    },
  },
};
