import React from "react";
import { AiOutlineTrophy as Icon } from "react-icons/ai";

function DoneList() {
  return (
    <div className="w-full p-6 mb-6 bg-gray-100 rounded shadow-lg">
      <h1 className="flex items-center gap-3 text-2xl font-bold md:text-xl">
        <Icon />
        DONE
      </h1>
      <hr className="my-4" />
    </div>
  );
}

export default DoneList;
