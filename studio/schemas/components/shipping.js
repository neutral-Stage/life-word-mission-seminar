export default {
  title: "Shipping Address",
  type: "object",
  name: "shippingAddress",
  fieldsets: [{ name: "address", title: "Shipping Address" }],
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      fieldset: "address",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      fieldset: "address",
    },
    {
      title: "Phone",
      name: "phone",
      type: "number",
      fieldset: "address",
    },
    {
      title: "Address",
      name: "address",
      type: "string",
      fieldset: "address",
    },
  ],
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: true, // Defines if the fieldset should be collapsed by default or not
    // Defines a grid for the fields and how many columns it should have
  },
};
