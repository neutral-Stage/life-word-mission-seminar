import React from "react";
import S from "@sanity/desk-tool/structure-builder";
// import documentStore from "part:@sanity/base/datastore/document";
import Emoji from "a11y-react-emoji";
import ListView from "./schemas/components/ListView";
import WebPreview from "./WebPreview";
const SliderIcon = () => <Emoji style={{ fontSize: "2rem" }} symbol="🏞️" />;
const ProductIcon = () => <Emoji style={{ fontSize: "2rem" }} symbol="📱" />;
const VendorIcon = () => <Emoji style={{ fontSize: "2rem" }} symbol="🏢" />;
const CategoryIcon = () => <Emoji style={{ fontSize: "2rem" }} symbol="🔣" />;
const SubcategoryIcon = () => (
  <Emoji style={{ fontSize: "2rem" }} symbol="⚙️" />
);
const ListIcon = () => <Emoji style={{ fontSize: "2rem" }} symbol="🗄️" />;
const SectionIcon = () => <Emoji style={{ fontSize: "2rem" }} symbol="🎚️" />;

export default () =>
  S.list()
    .title("Life Word Mission Bible Seminar")
    .items([
      S.listItem()
        .title("HomePage Slider")
        .icon(SliderIcon)
        .child(
          S.document()
            .schemaType("user")
            .documentId("slider")
            .views([
              S.view.form(),
              S.view.component(WebPreview).title("Web Preview"),
            ])
        ),
    ]);

export const getDefaultDocumentNode = () => {
  return S.document().views([
    S.view.form(),
    S.view.component(WebPreview).title("Web Preview"),
  ]);
};
