import React from "react";
import { RiTodoLine as Icon } from "react-icons/ri";

function TodoList({ todos }) {
  return (
    <div className="w-full p-6 mb-6 bg-gray-100 rounded shadow-lg">
      <h1 className="flex items-center gap-3 text-xl font-bold">
        <Icon />
        TODO
      </h1>
      <hr className="my-4" />
      {/* {todos.length ? todos.map((todo) => <p>Something to do</p>) : ""} */}
    </div>
  );
}

export default TodoList;
