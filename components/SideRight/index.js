import React, { useEffect } from "react";
import $ from "jquery";
import axios from "axios";

const SideRight = () => {
  // var months = [
  //   "Januari",
  //   "Februari",
  //   "Maret",
  //   "April",
  //   "Mei",
  //   "Juni",
  //   "Juli",
  //   "Agustus",
  //   "September",
  //   "Oktober",
  //   "November",
  //   "Desember",
  // ];
  // var myDays = [
  //   "Minggu",
  //   "Senin",
  //   "Selasa",
  //   "Rabu",
  //   "Kamis",
  //   "Jum&#39;at",
  //   "Sabtu",
  // ];
  // var date = new Date();
  // var day = date.getDate();
  // var month = date.getMonth();
  // var thisDay = date.getDay(),
  //   thisDay = myDays[thisDay];
  // var yy = date.getYear();
  // var year = yy < 1000 ? yy + 1900 : yy;
  // document.write(thisDay + ", " + day + " " + months[month] + " " + year);

  const apikey = "eef61386182e47b7a9bb74c1440bae58";
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=${apikey}`
      )
      .then((response) => render(response.data.articles));

    let conts = [];

    function render(data) {
      $.each(data, function (key, items) {
        console.log(items);
        conts += `<div class="rounded w-full flex flex-col md:flex-row mb-5">
        <img
          src=${items.urlToImage}
          class="block md:hidden lg:block rounded-md lg:h-30 md:h-20 m-4 md:m-0"
          style="max-width: 200px; height: 140px;"
        />
        <div class="bg-white rounded px-4">
          <span class="text-green-700 text-sm hidden md:block">
          ${items.author}
          </span>
          <div class="md:mt-0 text-gray-800 font-semibold text-sm">
          ${items.title}
          </div>
        </div>;
        </div>`;
      });
      $("#conts").html(
        '<h4 class="font-bold text-lg uppercase text-gray-700 text-5lg border-l-4 border-blue-600 px-1 py-3 mb-6">Terpopuler</h4>' +
          conts
      );
    }
  });
  return (
    <div className="w-full lg:w-1/3 px-3" id="conts">
      {/* topics */}
      Loading...
      {/* divider */}
      {/* <div className="border border-dotted" /> */}
      {/* subscribe */}
      {/* divider */}
      {/* <div id="d"></div>
      <div id="m"></div>
      <div id="y"></div> */}
    </div>
  );
};

export default SideRight;
