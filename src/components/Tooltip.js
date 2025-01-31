import React from "react";

const Tooltip = () => {
  return (
    <div className="absolute bg-white shadow-md p-2 rounded-md">
      <button className="p-1 hover:bg-gray-200">B</button>
      <button className="p-1 hover:bg-gray-200">I</button>
      <button className="p-1 hover:bg-gray-200">U</button>
    </div>
  );
};

export default Tooltip;
