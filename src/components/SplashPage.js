import React from "react";
import Header from "./Header";

function SplashPage() {
  return (
    <div className="min-h-screen text-center text-white uppercase bg-gradient-to-b from-gray-300 to-gray-700">
      <Header />
      <h1 className="pt-40 mb-8 font-bold text-8xl">Q90 Todos</h1>
      <p className="text-xl font-bold">
        Your todo list and time tracker, all in one
      </p>
    </div>
  );
}

export default SplashPage;
