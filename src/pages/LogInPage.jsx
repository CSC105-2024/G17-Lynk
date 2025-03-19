import React from 'react';
import DarkLogo from '../images/LogoDarkTransparent.svg';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../components/FormInput";
import {button} from '../styles/styles';

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
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-10">
      <div className="flex justify-center items-center gap-20 max-w-5xl w-full">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center w-1/2">
          <img src={DarkLogo} alt="LYNk Logo" className="w-48" />
          <p className="text-3xl font-bold mt-4">Welcome to LYNk!</p>
          <p className="text-xl text-gray-300">We List What You Wish</p>
        </div>

        {/* Form Section */}
        <div className="w-[400px] flex flex-col gap-8 p-8 bg-[#111] text-white rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-semibold">Login</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput type="email" placeholder="Email" error={errors.email} func={register("email")}/>

            <FormInput type="password" placeholder="Password" error={errors.password} func={register("password")}/>
            <button type="submit" className={`${button} mt-8`}>Login</button>
          </form>

          {/* Sign-up redirect */}
          <p className="text-gray-400">
            Don't have an account?{" "}
            <span className="text-sky-500 underline cursor-pointer" onClick={handle_SignUp}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
