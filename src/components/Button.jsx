import React from "react";

const Button = ({ styles = "" }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient text-white font-poppins font-medium text-[18px] rounded-[10px] outline-none 
        transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
