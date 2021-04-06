import React from "react";
import Header from "./Header";

function SplashPage() {
  return (
    <div className="min-h-screen text-center text-white uppercase bg-gradient-to-b from-gray-300 to-gray-700">
      <div className="absolute right-0">
        <Header />
      </div>
      <section className="flex items-center justify-center h-screen">
        <div>
          <h1 className="mb-8 font-bold text-7xl sm:text-8xl">Q90 Todos</h1>
          <p className="text-lg font-bold sm:text-xl">
            Your todo list and time tracker, all in one
          </p>
        </div>
      </section>
    </div>
  );
}

export default SplashPage;
