import React from "react";

const ResturantLogin = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[400px] bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 font-medium">
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResturantLogin;