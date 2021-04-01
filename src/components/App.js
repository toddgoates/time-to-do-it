import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TaskForm from "./TaskForm";
import AllTasks from "./AllTasks";
import SplashPage from "./SplashPage";
import Header from "./Header";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  if (isLoading) return <p>Loading...</p>;

  const todos = [];
  const doings = [];
  const dones = [];

  return (
    <>
      {isAuthenticated ? (
        <div className="min-h-screen bg-gray-300">
          <Header />
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
        </div>
      ) : (
        <SplashPage />
      )}
    </>
  );
}

export default App;
