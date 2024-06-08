import React from "react";
import { HiMoon } from "react-icons/hi2";
import { FaSun } from "react-icons/fa";
const DarkModeSwitch = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="flex items-center justify-center">
      <label className="switch">
        <input checked={isDarkMode} onChange={toggleDarkMode} type="checkbox" />
        <div className="moon text-h4 p-3 h-max rounded-rounded12 text-fontcolorslate700 hover:bg-primarycolor200 hover:text-primarycolor900">
          <HiMoon />
        </div>
        <div className="sun text-h4 p-3 h-max rounded-rounded12 text-fontcolorslate700 hover:bg-primarycolor200 hover:text-primarycolor900 dark:text-[white] dark:hover:text-primarycolor900">
          <FaSun />
        </div>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
