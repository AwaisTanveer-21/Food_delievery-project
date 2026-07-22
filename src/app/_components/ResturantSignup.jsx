import React from "react";

const ResturantSignup = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">
          Restaurant Signup
        </h2>

        <form className="flex flex-col gap-4">
    

          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="Name" className="mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="Name"
              placeholder="Enter your  name"
              className="border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>         

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="mb-1 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResturantSignup;