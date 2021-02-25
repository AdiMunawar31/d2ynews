import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r to-indigo-700 from-blue-600 p-1">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-10">
          <div className="text-md font-bold lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              BUSINESS
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              ENTERTAINMENT
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              HEALTH
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              SCIENCE
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              SPORTS
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              TECHNOLOGY
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
