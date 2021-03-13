import React from "react";
import TodoList from "./TodoList";
import DoingList from "./DoingList";
import DoneList from "./DoneList";

function AllTasks({ todos, doings, dones }) {
  return (
    <div className="lg:justify-between lg:gap-5 lg:flex">
      <TodoList todos={todos} />
      <DoingList doings={doings} />
      <DoneList dones={dones} />
    </div>
  );
}

export default AllTasks;
