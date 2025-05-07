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
  confirmPassword: z.string().min(8, '❌ Password must be at least 8 characters long'),
});

// SignUp Page Component
const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    mode: 'onChange',
  });

  // On Submit handler
  const onSubmit = async (data) => {
    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/register', {
        email,
        password,
        username: email,
      });

      // On success, navigate to login page
      if (response.data?.success) {
        alert('User created successfully! Please log in.'); // //frontend component needs to be created
        navigate('/login');
      } else {
        alert('Error creating user: ' + response.data?.msg);
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('Something went wrong. Please try again later.'); //frontend component needs to be created
    }
  };

  // Sign up form
  const SignUp = (
    <>
      <h1 className={`${title} mb-6`}>Create an Account</h1>

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
          <FormInput
            type='password'
            placeholder='Confirm Password:'
            error={errors.confirmPassword}
            func={register('confirmPassword')}
          />
          <Button
            text='Create'
            variant='btnOutline'
            className='mx-auto mt-8 py-2 px-10 text-[var(--btn-primary-outline-text-color)]'
            type="submit"
          />
        </form>
      </div>

      <p className='mt-6 text-center text-sm md:text-base'>
        Already have an account?{'  '}
        <a href='/login' className='underline text-blue-400'>
          Login
        </a>
      </p>
    </>
  );

  return (
    <AuthLayout AuthForm={SignUp} />
  );
};

export default SignUpPage;
