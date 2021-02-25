import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import BannerRight from "./BannerRight";

const Banner = () => {
  const [data, setData] = useState([]);
  const apikey = "eef61386182e47b7a9bb74c1440bae58";
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=${apikey}`
      )
      .then((response) =>
        response.data.articles.map((datas) => setData(datas))
      );
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apikey}`)
  //     .then((response) => response.data.articles.map(datas => console.log(datas))
  // }, []);
  return (
    <div>
      <div className="hidden md:flex md:space-x-2 px-2 lg:p-0">
        <a
          className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
          style={{ height: "24em" }}
          href={data.url}
          target="_blank"
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            id="img"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }}
          />
          <img
            src={data.urlToImage}
            className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <h2
              className="text-4xl font-semibold text-gray-100 leading-tight"
              id="desc"
            >
              {data.title}
            </h2>
            <div className="flex mt-3">
              <div>
                <p className="font-semibold text-gray-200 text-sm" id="author">
                  {data.author}
                </p>
                <p className="font-semibold text-gray-400 text-xs" id="date">
                  {data.publishedAt}
                </p>
              </div>
            </div>
          </div>
        </a>
        <BannerRight />
      </div>
    </div>
  );
};

export default Banner;
