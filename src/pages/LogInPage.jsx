import React from 'react';
import DarkLogo from '../images/LogoDarkTransparent.svg';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z.object({
  email: z.string().email("❌ Invalid Email Format"),
  password: z.string()
    .min(8, "❌ Password must be at least 8 characters long")
    .regex(/[A-Z]/, "❌ Must contain at least one uppercase letter")
    .regex(/[a-z]/, "❌ Must contain at least one lowercase letter")
    .regex(/[0-9]/, "❌ Must contain at least one number")
    .regex(/[@$!%*?&]/, "❌ Must contain at least one special character (@$!%*?&)"),
});

const LogInPage = () => {
  const navigate = useNavigate();

  function handle_SignUp() {
    navigate('/signup');
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col gap-3">
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full h-12 p-3 bg-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full h-12 p-3 bg-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="text-left text-sm text-red-500 space-y-1">
            {errors.password?.message?.includes("8 characters") && <p>❌ Password must be at least 8 characters</p>}
            {errors.password?.message?.includes("one uppercase") && <p>❌ Must have at least one uppercase letter</p>}
            {errors.password?.message?.includes("one lowercase") && <p>❌ Must have at least one lowercase letter</p>}
            {errors.password?.message?.includes("one number") && <p>❌ Must have at least one number</p>}
            {errors.password?.message?.includes("one special") && <p>❌ Must have at least one special character (@$!%*?&)</p>}
          </div>
        </form>

        {/* Footer */}
      <div className="flex flex-col items-center gap-15">
           <button className="w-48 max-w-xs h-10 p-3 bg-white text-blackg font-semibold rounded-md hover:bg-gray-200 transition">
              Create
            </button>
            <p className="text-gray-400 text-center mt-2">
              Already have an account?{' '}
              <a className="text-sky-500 underline" onClick={handle_SignUp}>Login</a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
