import React from "react";

const Button = () => {
  return (
    <div>
      <div className="inline-block mr-2 mt-2">
        <button
          type="button"
          className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r to-indigo-700 from-blue-600 transform hover:scale-110"
        >
          Primary
        </button>
      </div>
    </div>
  );
};

export default Button;
