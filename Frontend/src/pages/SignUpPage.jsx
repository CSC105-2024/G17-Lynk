import React from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import AuthLayout from '../components/Form/AuthLayout';
import FormInput from '../components/Form/FormInput';
import Button from '../components/Button';
import { title } from '../styles/styles';

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

const SignUpPage = () => {
  const navigate = useNavigate();

  function handle_SignUp() {
    navigate('/login');
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
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
            error={errors.password}
            func={register('password')}
          />
          <Button
            text='Create'
            variant='btnOutline'
            className='mx-auto mt-8 py-2 px-10 text-[var(--btn-primary-outline-text-color)]'
            onClick={handle_SignUp}
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
    // Passing SignUp form to AuthLayout component to complete Sign Up Page
    <AuthLayout AuthForm={SignUp} />
  );
};

export default SignUpPage;
