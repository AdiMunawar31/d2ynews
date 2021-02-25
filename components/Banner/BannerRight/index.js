import React, { useEffect, useState } from "react";
import $ from "jquery";
import axios from "axios";

const BannerRight = () => {
  const [data, setData] = useState([]);
  const apikey = "eef61386182e47b7a9bb74c1440bae58";
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=${apikey}`
      )
      .then((response) =>
        response.data.articles.map((datas) => setData(datas))
      );
  }, []);
  return (
    <a
      className="w-full md:w-1/3 relative rounded"
      style={{ height: "24em" }}
      href={data.url}
      target="_blank"
    >
      <div
        className="absolute left-0 top-0 w-full h-full z-10"
        style={{
          backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.8))",
        }}
      />
      <img
        src={data.urlToImage}
        className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
      />
      <div className="p-4 absolute bottom-0 left-0 z-20">
        <h2 className="text-lg font-semibold text-gray-100 leading-tight">
          {data.title}
        </h2>
        <div className="flex mt-3">
          <div>
            <p className="font-semibold text-gray-200 text-sm">{data.author}</p>
            <p className="font-semibold text-gray-400 text-xs">
              {data.publishedAt}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BannerRight;
