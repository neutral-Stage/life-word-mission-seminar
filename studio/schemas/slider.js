import { GiFactory } from "react-icons/gi";

export default {
  name: "slider",
  title: "Home Page Slider",
  type: "document",
  icon: GiFactory,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "images",
      title: "Slide Image",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      layout: "grid",
      validation: (Rule) => [
        Rule.required().min(1).error("Minimum One image is required"),
        Rule.max(6).error("Maximum 6 image"),
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "images[0]",
    },
  },
};
