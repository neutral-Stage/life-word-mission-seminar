import { FiDownload } from "react-icons/fi";

export default {
  name: "order",
  title: "Order",
  type: "document",
  icon: FiDownload,
  fields: [
    {
      name: "orderedDate",
      title: "Ordered Date",
      type: "datetime",
      readOnly: true,
      options: {
        dateFormat: "dddd, Do MMMM, YYYY, ",
        timeFormat: "hh:mm a",
        timeStep: 10,
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "deliveryDate",
      title: "Delivery Date",
      type: "date",
      // readOnly: true,
      options: {
        dateFormat: "dddd, Do MMMM, YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "completedDate",
      title: "Completed Date",
      type: "datetime",
      options: {
        dateFormat: "dddd, Do MMMM, YYYY, ",
        timeFormat: "hh:mm a",
        timeStep: 10,
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "orderId",
      title: "Order ID",
      type: "string",
      readOnly: true,
    },
    {
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
      weak: true,
      // readOnly: true,
    },

    {
      name: "cart",
      title: "Cart",
      type: "cart",
    },

    {
      name: "total",
      title: "Total",
      type: "number",
      readOnly: true,
    },
    {
      name: "notes",
      title: "Notes(optional)",
      type: "text",
    },
    {
      name: "shippingAddress",
      type: "shippingAddress",
    },
    {
      name: "delivered",
      title: "Delivered",
      type: "boolean",
    },
    {
      name: "paid",
      title: "Paid",
      type: "boolean",
    },
  ],
  initialValue: {
    delivered: false,
    paid: false,
  },
  preview: {
    select: {
      title: "orderId",
      total: "total",
      delivered: "delivered",
      paid: "paid",
    },
    prepare({ title, total, delivered, paid }) {
      return {
        title: `${title.slice(0, 4)}---${
          delivered ? "(delivered)" : "(not delivered)"
        }-${paid ? "(paid)" : "(unpaid)"}`,
        subtitle: `${total}Tk`,
      };
    },
  },
};
