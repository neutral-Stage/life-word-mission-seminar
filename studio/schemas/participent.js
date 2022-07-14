import { BsPeopleFill } from "react-icons/bs";

export default {
  name: "participent",
  title: "Participent",
  type: "document",
  icon: BsPeopleFill,

  fields: [
    {
      name: "guider",
      description: "Brother/Sister's Name",
      title: "Guider",
      type: "string",
    },
    {
      name: "invitee",
      description: "Name whom invited",

      title: "Invitee",
      type: "string",
    },
    {
      name: "relationship",
      title: "Relationship",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      description: "Region / Location",

      type: "string",
    },
    {
      name: "contact",
      title: "Contact",
      type: "string",
    },
    {
      name: "fellowshipName",
      title: "Fellowship Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "sessions",
      title: "sessions",
      type: "object",
      fields: [
        {
          name: "s1",
          title: "Session-1",
          type: "boolean",
        },
        {
          name: "s2",
          title: "Session-2",
          type: "boolean",
        },
        {
          name: "s3",
          title: "Session-3",
          type: "boolean",
        },
        {
          name: "s4",
          title: "Session-5",
          type: "boolean",
        },
        {
          name: "s6",
          title: "Session-6",
          type: "boolean",
        },
      ],
    },
    {
      name: "oneOrTwodays",
      title: "One or Two Days Seminar",
      type: "boolean",
    },
    {
      name: "dayOne",
      title: "Day One",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "dayTwo",
      title: "Day Two",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today",
      },
      hidden: ({ parent, value }) => !value && parent?.oneOrTwodays,
    },
    {
      name: "remarks",
      title: "Remarks",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "invitee",
      subtitle: "contact",
    },
  },
};
