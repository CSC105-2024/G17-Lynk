import React from 'react';
import DarkLogo from '../images/LogoDarkTransparent.svg';

const LogInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col items-center text-center gap-3">
        <img src={DarkLogo} alt="LYNk Logo" />
        <p className="text-3xl font-bold">Welcome to LYNk!</p>
        <p className="text-xl">We List What You Wish</p>
      </div>

      {/* Right Section */}
      <div className="w-96 p-8 bg-black text-white rounded-lg shadow-lg mx-auto text-center flex flex-col gap-20">
  <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
  <form className="space-y-4 flex flex-col gap-3">
    <input
      type="email"
      placeholder="Email"
      className="w-full h-12 bg-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 px-10"
    />
    <input
      type="password"
      placeholder="Password"
      className="w-full h-12 p-3 bg-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </form>

  {/* Footer */}
  <div className="flex flex-col items-center mt-4 space-y-3">
    <button className="w-full max-w-xs h-10 p-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
      Login
    </button>
    <p className="text-gray-400 text-center mt-2">
      Don't have an account?{' '}
      <a href="#" className="text-blue-500 underline">Sign up</a>
    </p>
  </div>
</div>
    </div>
  );
};

export default LogInPage;
