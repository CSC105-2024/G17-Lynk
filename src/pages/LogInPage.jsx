import React from 'react';
import DarkLogo from '../images/LogoDarkTransparent.svg';
import { useNavigate } from 'react-router-dom';
const LogInPage = () => {
  const navigate = useNavigate();


  function handle_SignUp(){
    navigate('/signup')
    return;
  }

  // will handle later route to dashboard
  // function handle_HomePage(){
  //   navigate('/')
  //   return
  // }
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col items-center text-center gap-3">
        <img src={DarkLogo} alt="LYNk Logo" />
        <p className="text-3xl font-bold">Welcome to LYNk!</p>
        <p className="text-xl">We List What You Wish</p>
      </div>

      {/* Right Section */}
      <div className="w-96 flex flex-col gap-10 p-8 bg-black text-white rounded-lg shadow-lg mx-auto text-center">
          <h1 className="text-3xl font-semibold text-center">Login</h1>
          <form className="space-y-4 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 p-3 bg-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 p-3 bg-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>

  {/* Footer */}
  <div className="flex flex-col items-center gap-15">
    <button className="w-48 max-w-xs h-10 p-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
      Login
    </button>
    <p className="text-gray-400 text-center mt-2">
      Don't have an account?{' '}
      <a href="#" className="text-sky-500 underline" onClick={handle_SignUp}>Sign up</a>
    </p>
  </div>
</div>
    </div>
  );
};

export default LogInPage;
