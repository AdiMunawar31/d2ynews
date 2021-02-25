import axios from "axios";
import React, { useEffect } from "react";
import { Latest } from "..";
import $ from "jquery";

const SideLeft = () => {
  const apikey = "eef61386182e47b7a9bb74c1440bae58";
  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apikey}`)
      .then((response) => render(response.data.articles));

    let cont = [];

    function render(data) {
      $.each(data, function (key, items) {
        cont += `
        <a
        class="block rounded w-full lg:flex mb-10"
        href=${items.url}
        target="_blank"
        id="cont"
      >
        <div style="width: 300px; height: 200px;" class="flex" id="imagez">
      <img src=${items.urlToImage} style="max-width: 300px; height: 230px;" />
    </div>
    <div class="bg-white sm:block rounded px-4 flex flex-col justify-between leading-normal">
      <div id="titlez"><div
      class="pt-30 md:mt-0 text-gray-700 font-bold text-2xl mb-2 mt-10"
    >
      ${items.title}
    </div>
    <p class="text-gray-700 text-base">
    ${items.description}
    </p>
    <div class="flex mt-3">
        <div>
          <p
            class="font-semibold text-gray-700 text-sm capitalize"
            id="authorz"
          >
            ${items.author}
          </p>
          <p class="text-gray-600 text-xs" id="datez">
           ${items.publishedAt}
          </p>
        </div>
      </div>
      </div>
      
    </div>
      </a>`;
      });
      $("#cont").html(
        '<h4 class="font-bold text-lg uppercase text-gray-700 text-5lg border-l-4 border-blue-600 px-1 py-3 mb-6">Terkini</h4>' +
          cont
      );
    }
  }, []);
  return (
    <div className="w-full lg:w-2/3">
      <div id="cont">Loading...</div>
      <Latest />
    </div>
  );
};

export default SideLeft;
