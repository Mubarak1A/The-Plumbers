import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  // login functionality
  const handleSignUp = async (e) => {
    e.preventDefault();
  };

  return (
    <section className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% flex lg:flex lg:justify-between lg:items-center justify-center items-center py-20'>
      <div className='lg:flex lg:flex-col lg:justify-center lg:items-center mx-auto'>
        <div className='mx-auto w-[20rem] mb-10 font-bold text-4xl text-center'>
          <h1 className='text-blue'>
            {' '}
            <span className='mr-2'>
              <ion-icon name='desktop'></ion-icon>
            </span>
            Sigma Learning Platform
          </h1>
        </div>
        <div className='bg-blue p-10 rounded-md'>
          <form className='flex flex-col' onSubmit={handleSignUp}>
            <div className='mb-3 flex flex-col'>
              <label htmlFor='email' className='text-xl mb-1 text-white'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='pt-2 invalid:text-red-400 border-none outline-none placeholder:px-2 py-2 w-80 bg-white'
                placeholder='enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor='password' className='text-xl mb-1 text-white'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='pt-2  border-none outline-none placeholder:px-2 py-2 w-80 bg-white'
                placeholder='enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='bg-white text-center mt-10 rounded-md p-2 text-blue text-lg'>
              <button>Sign up</button>
            </div>
          </form>

          <p className='mt-4 text-white'>
            have an account?{' '}
            <Link className='text-blue bg-slate-400 p-2' to='/login'>
              login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;