import { ImImages } from "react-icons/im";

export default {
  name: "section",
  title: "Section",
  type: "document",
  icon: ImImages,
  fields: [
    {
      name: "subsections",
      title: "Subsections",
      type: "array",
      options: {
        editModal: "popover",
      },
      of: [
        {
          type: "subsection",
        },
      ],
    },
  ],
};
