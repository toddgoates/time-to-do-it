import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import AllTasks from "./AllTasks";

function App() {
  const [todos, setTodos] = useState([]);
  const [doings, setDoings] = useState([]);
  const [dones, setDones] = useState([]);

  useEffect(() => {
    // setTodos(localStorage.getItem("todos"));
    // setDoings(localStorage.getItem("doings"));
    // setDones(localStorage.getItem("dones"));
  });

  return (
    <main className="min-h-screen bg-gray-300">
      <div className="p-6">
        <div className="lg:flex lg:gap-5">
          <div className="lg:w-1/4">
            <TaskForm />
          </div>
          <div className="lg:w-3/4">
            <AllTasks todos={todos} doings={doings} dones={dones} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
