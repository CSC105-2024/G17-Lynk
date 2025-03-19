import React from 'react';
import DarkLogo from '../images/LogoDarkTransparent.svg';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation Schema
const userSchema = z.object({
  email: z.string().email("❌ Invalid Email Format"),
  password: z.string()
    .min(8, "❌ Password must be at least 8 characters long")
    .regex(/[A-Z]/, "❌ Must contain at least one uppercase letter")
    .regex(/[a-z]/, "❌ Must contain at least one lowercase letter")
    .regex(/[0-9]/, "❌ Must contain at least one number")
    .regex(/[@$!%*?&]/, "❌ Must contain at least one special character (@$!%*?&)"),
});

const SignUpPage = () => {
  const navigate = useNavigate();

  function handle_LogIn() {
    navigate('/login');
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-10">
      <div className="flex justify-center items-center gap-20 max-w-5xl w-full">
        
        {/* Left Section */}
        <div className="flex flex-col items-center text-center w-1/2">
          <img src={DarkLogo} alt="LYNk Logo" className="w-48" />
          <p className="text-3xl font-bold mt-4">Welcome to LYNk!</p>
          <p className="text-xl text-gray-300">We List What You Wish</p>
        </div>

        {/* Right Section */}
        <div className="w-[400px] flex flex-col gap-8 p-8 bg-[#111] text-white rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-semibold">Create an Account</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col text-left">
              <input
                {...register("email")}
                type="email"
                placeholder ="Email:"
                className="w-full h-12 px-4 bg-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>} */}
            </div>

            <div className="flex flex-col text-left">
              <input
                {...register("password")}
                type="password"
                placeholder="Password:"
                className="w-full h-12 px-4 bg-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* <div className="text-left text-sm text-red-500 space-y-1 mt-1">
                {errors.password?.message?.includes("8 characters") && <p>❌ Password must be at least 8 characters</p>}
                {errors.password?.message?.includes("one uppercase") && <p>❌ Must have at least one uppercase letter</p>}
                {errors.password?.message?.includes("one lowercase") && <p>❌ Must have at least one lowercase letter</p>}
                {errors.password?.message?.includes("one number") && <p>❌ Must have at least one number</p>}
                {errors.password?.message?.includes("one special") && <p>❌ Must have at least one special character (@$!%*?&)</p>}
              </div> */}
            </div>
            
            <div className="flex flex-col text-left">
              <input
                {...register("password")}
                type="password"
                placeholder="Confirm Password:"
                className="w-full h-12 px-4 bg-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-1/2 h-12 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Create
            </button>
          </form>

          {/* Sign-up redirect */}
          <p className="text-gray-400">
            Already have an account?{" "}
            <span className="text-sky-500 underline cursor-pointer" onClick={handle_LogIn}>Log In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;