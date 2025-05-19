import React from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import AuthLayout from '../components/Form/AuthLayout';
import FormInput from '../components/Form/FormInput';
import Button from '../components/Button';
import { title } from '../styles/styles';
import axios from 'axios';

// Validation Schema
const userSchema = z.object({
  email: z.string().email('❌ Invalid Email Format'),
  password: z
    .string()
    .min(8, '❌ Password must be at least 8 characters long')
    .regex(/[A-Z]/, '❌ Must contain at least one uppercase letter')
    .regex(/[a-z]/, '❌ Must contain at least one lowercase letter')
    .regex(/[0-9]/, '❌ Must contain at least one number')
    .regex(
      /[@$!%*?&]/,
      '❌ Must contain at least one special character (@$!%*?&)'
    ),
});

const LogInPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    mode: 'onChange',
  });

  const loginUser = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/login',
        {
          email: data.email,
          password: data.password,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Backend Response:', response.data);
      if (response.status === 200 && response.data.user) {
        const userData = response.data.user;
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/app/dashboard');
      } else {
        alert(response.data.msg || 'Login failed: No success flag');
      }
    } catch (error) {
      console.error('Login Error:', {
        message: error.message,
        response: error.response?.data,
      });
      alert(
        error.response?.data?.msg || 'Login failed. Check console for details.'
      );
    }
  };

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    loginUser(data);
  };

  // Login form JSX (unchanged)
  const Login = (
    <>
      <h1 className={`${title} mb-6`}>Login</h1>
      <div className='w-full'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            type='email'
            placeholder='Email:'
            error={errors.email}
            func={register('email')}
          />
          <FormInput
            type='password'
            placeholder='Password:'
            error={errors.password}
            func={register('password')}
          />
          <Button
            type='submit'
            text='Login'
            variant='btnOutline'
            className='mx-auto mt-8 py-2 px-10 text-[var(--btn-primary-outline-text-color)]'
          />
        </form>
      </div>

      <p className='mt-6 text-center text-sm md:text-base'>
        Don't have an account?{' '}
        <a href='/signup' className='underline text-blue-400'>
          Sign Up
        </a>
      </p>
    </>
  );

  return <AuthLayout AuthForm={Login} />;
};

export default LogInPage;
