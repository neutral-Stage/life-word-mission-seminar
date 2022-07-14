import React, { useEffect, useState } from "react";
import client from "../../service/client";
import imageUrlBuilder from "@sanity/image-url";
const ListView = ({ data, documentId }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const query = `*[_type=="product" && subcategory._ref==$id]`;
  const params = { id: documentId };
  const fetchedData = async () => {
    setLoading(true);
    await client.fetch(query, params).then((bikes) => {
      setProducts(bikes);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchedData();
  }, []);

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <div style={{ padding: "1rem", textTransform: "capitalize" }}>
      <h2>{data.title}</h2>

      {loading && <div>Loading data please wait...</div>}

      {products.length > 0 && (
        <div>
          {products.map((product) => {
            return (
              <div
                key={product._id}
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "1rem",
                  margin: "1rem 0",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {product.image && (
                  <img
                    src={urlFor(product.image[0].asset)
                      .width(60)
                      .quality(30)
                      .url()}
                    alt={product.title}
                  />
                )}
                <div>{product.title}</div>

                <div style={{ padding: "0 1rem" }}>{product.price}TK</div>
              </div>
            );
          })}
        </div>
      )}
      {!loading && products.length == 0 && <div>No products are found 😔</div>}
    </div>
  );
};

export default ListView;
