import React, { useEffect } from "react";
import $ from "jquery";
import Link from "next/link";

const Navbar = () => {
  useEffect(() => {
    function time() {
      let h = new Date().getHours();
      let m = new Date().getMinutes();
      let s = new Date().getSeconds();
      var ampm = "AM";

      if (h > 12) {
        h -= 12;
        var ampm = "PM";
      }

      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;

      $("#h").html(h);
      $("#m").html(m);
      $("#s").html(s);
      $("#ampm").html(ampm);
    }

    time();
    setInterval(time, 1000);
  });
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white py-4 shadow border-solid border-t-2 border-blue-700">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6  border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-blue-600 mr-16 ml-10">
            <Link href="/">
              <a className="font-semibold text-5xl font-bold font-lobster tracking-tight">
                D2YNEWS
              </a>
            </Link>
          </div>
        </div>
        <div className="menu w-full sm:inline-block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 mt-2 px-8">
          <div className="text-md font-bold text-blue-700 lg:flex-grow sm:flex md:flex">
            <a
              href="#responsive-header"
              id="time"
              className="flex mt-4 lg:inline-block lg:mt-0 text-white text-2xl px-4 py-2 rounded mr-2"
            >
              <span
                id="h"
                className="text-white text-2xl px-6 py-2 rounded bg-gradient-to-r to-indigo-700 from-blue-600"
              ></span>{" "}
              -{" "}
              <span
                id="m"
                className="text-white text-2xl px-6 py-2 rounded bg-gradient-to-r to-indigo-700 from-blue-600"
              ></span>{" "}
              -{" "}
              <span
                id="s"
                className="text-white text-2xl px-6 py-2 rounded bg-gradient-to-r to-indigo-700 from-blue-600"
              ></span>
              <span
                id="ampm"
                className="text-white text-1xl px-2 rounded ml-5 mt-5 bg-gray-600"
              ></span>
            </a>
          </div>
          {/* This is an example component */}
          <div className="relative mx-auto text-gray-600 lg:block hidden">
            <input
              className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          <div className="flex ">
            <Link href="/login">
              <a className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0">
                Sign in
              </a>
            </Link>
            <Link href="/register">
              <a className=" block text-md px-4  ml-2 mr-10 py-2 rounded font-bold text-white mt-4 bg-gradient-to-r to-indigo-700 from-blue-600 lg:mt-0">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
