// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// import vendor from "./vendor";
import participent from "./participent";
// import subcategory from "./subcategory";
// import category from "./category";
// import product from "./product";
// import slider from "./slider";
// import order from "./order";
// import section from "./section";

// import cart from "./components/cart";
import blockContent from "./components/blockContent";
// import shipping from "./components/shipping";
// import subsection from "./components/subsection";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    participent,
    // product,
    // subcategory,
    // category,
    // vendor,
    blockContent,
    // slider,
    // order,
    // cart,
    // shipping,
    // section,
    // subsection,
  ]),
});
