import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <hr className="mb-30" />
        <div className="flex flex-wrap justify-end">
          <div className="w-full lg:w-2/5">
            <p className="text-gray-600 hidden lg:block my-20 pl-50 lg:pl-12">
              Boisterous he on understood attachment as entreaties ye
              devonshire. In mile an form snug were been sell. Extremely ham any
              his departure for contained curiosity defective. Way now
              instrument had eat diminution melancholy expression sentiments
              stimulated.
            </p>
          </div>
          <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5 lg:pl-20">
            <h6 className="font-semibold text-gray-700 mt-20">Company</h6>
            <ul>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Team
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  About us
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Press
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5 lg:pl-20">
            <h6 className="font-semibold text-gray-700 mt-20">Content</h6>
            <ul>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Blog
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Privacy Policy
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Terms &amp; Conditions
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Documentation
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5 lg:pl-20">
            <h6 className="font-semibold text-gray-700 mt-20">Company</h6>
            <ul>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Team
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  About us
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Press
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="flex justify-center px-4 text-gray-600 bg-white">
        <div className="container py-6">
          <h1 className="text-center text-lg font-bold lg:text-2xl">
            Join 31,000+ other and never miss <br /> out on new tips, tutorials,
            and more.
          </h1>
          <div className="flex justify-center mt-6">
            <div className="bg-gray-100 rounded-lg">
              <div className="flex flex-wrap justify-between md:flex-row">
                <input
                  type="email"
                  className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none"
                  placeholder="Enter your email"
                />
                <button className="w-full m-1 p-2 text-sm bg-gradient-to-r to-indigo-700 from-blue-600 text-white rounded-lg font-semibold uppercase lg:w-auto">
                  subscribe
                </button>
              </div>
            </div>
          </div>
          <hr className="h-px mt-6 bg-gray-500 border-none" />
          <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div className="flex items-center flex-shrink-0 text-blue-600 mr-16 ml-10">
              <span className="font-semibold text-3xl font-bold tracking-tight">
                D2YNEWS
              </span>
            </div>
            <div className="flex mt-4 mr-10 md:m-0">
              <div className="-mx-4">
                <a href="#" className="px-4 text-sm">
                  About
                </a>
                <a href="#" className="px-4 text-sm">
                  Blog
                </a>
                <a href="#" className="px-4 text-sm">
                  News
                </a>
                <a href="#" className="px-4 mr-10 text-sm">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
