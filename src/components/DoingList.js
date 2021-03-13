import React from "react";
import { GrWorkshop as Icon } from "react-icons/gr";

function DoingList() {
  return (
    <div className="w-full p-6 mb-6 bg-gray-100 rounded shadow-lg">
      <h1 className="flex items-center gap-3 text-xl font-bold">
        <Icon />
        IN-PROGRESS
      </h1>
      <hr className="my-4" />
    </div>
  );
}

export default DoingList;
