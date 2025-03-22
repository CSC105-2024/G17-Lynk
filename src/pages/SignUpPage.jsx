import React from 'react';
import DarkLogo from '../images/LogoDarkTransparent.svg';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthLayout from "../components/AuthLayout";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import {title } from "../styles/styles";

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

  const SignUp = (
    <div className="flex flex-col items-center justify-center text-white w-full md:w-2xl gap-3 p-20 rounded-2xl" style={{backgroundColor: "var(--third-dark-color)"}}>
    <h1 className={`${title} mb-6`}>Create an Account</h1>
    <div className="w-full">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <FormInput type="email" placeholder="Email" error={errors.email} func={register("email")}/>
        <FormInput type="password" placeholder="Password" error={errors.password} func={register("password")}/>
        <FormInput type="password" placeholder="Confirm Password" error={errors.password} func={register("password")}/>
        <Button text="Create" variant="btnFill" className="mx-auto mt-8"></Button>
      </form>
    </div>

    <p className="mt-6 text-center text-sm md:text-base">
        Already have an account?{'  '}
      <a href="/login" className="underline text-blue-400">
        Login
      </a>
    </p>
  </div>
  )
  
  return (
    <AuthLayout AuthForm={SignUp}/>
  );
};

export default SignUpPage;
