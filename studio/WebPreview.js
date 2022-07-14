import React, { useState, useCallback, useEffect } from "react";
import client from "./service/client";
const url = "https://gadget-store-bd.vercel.app";
const WebPreview = ({ document }) => {
  const [targetUrl, setTargetUrl] = useState(null);
  const { displayed } = document;
  if (displayed._type === "product") {
    const sub = `*[_type=="subcategory" && _id==$id][0]`;
    const params = { id: displayed.subcategory._ref };
    const fetchMyAPI = useCallback(async () => {
      var subcategory;
      var category;
      await client.fetch(sub, params).then((dataOne) => {
        subcategory = dataOne;
      });
      const cate = `*[_type=="category" && _id==$id][0]`;
      const cateparams = { id: subcategory.category._ref };
      await client.fetch(cate, cateparams).then((dataTwo) => {
        category = dataTwo;
        const target = `${url}/${category.slug.current}/${subcategory.slug.current}/${displayed.slug.current}`;
        setTargetUrl(target);
      });
    }, []);
    useEffect(() => {
      fetchMyAPI();
    }, [fetchMyAPI]);

    return (
      targetUrl && (
        <iframe src={targetUrl} frameBorder={0} width="100%" height="100%" />
      )
    );
  } else if (displayed._type === "category") {
    const targetURL = `${url}/${displayed.slug.current}`;

    return (
      <iframe src={targetURL} frameBorder={0} width="100%" height="100%" />
    );
  } else if (displayed._type === "subcategory") {
    const fetchMyAPI = useCallback(async () => {
      var category;

      const cate = `*[_type=="category" && _id==$id][0]`;
      const cateparams = { id: displayed.category._ref };
      await client.fetch(cate, cateparams).then((dataTwo) => {
        category = dataTwo;
        const target = `${url}/${category.slug.current}/${displayed.slug.current}`;
        setTargetUrl(target);
      });
    }, []);
    useEffect(() => {
      fetchMyAPI();
    }, [fetchMyAPI]);

    return (
      targetUrl && (
        <iframe src={targetUrl} frameBorder={0} width="100%" height="100%" />
      )
    );
  } else {
    const targetURL = url;
    return (
      <iframe src={targetURL} frameBorder={0} width="100%" height="100%" />
    );
  }
};

export default WebPreview;
