import React, { useState } from 'react'
import httpClients from '../api/api'

// import { LockClosedIcon } from '@heroicons/react/solid'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const logInUser = async () => {
    const resp = await httpClients
      .post('//127.0.0.1:5000/login', {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(resp)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-left text-3xl font-base text-gray-900'>
            Log in to IBM
          </h2>
        </div>
        <form
          className='mt-2 space-y-6'
          action='src/components/Shared/login#Login.jsx'
          method='POST'
        >
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <p className='flex flex-row-reverse font-base text-sm text-indigo-600 cursor-pointer'>
              Forgot IBMid?
            </p>
            <div>
              <label htmlFor='email-address' className='text-sm text-gray-600'>
                IBMid
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete='email'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-gray-300 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              />
            </div>
            <div className='pt-4'>
              <label htmlFor='password' className='text-sm text-gray-600'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='current-password'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-gray-300 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='text-sm'>
              <a
                href='src/components/Shared/login#Login.jsx'
                className='font-base text-indigo-600 cursor-pointer'
              />
              <a
                href='/register'
                className='font-base text-indigo-600 cursor-pointer'
              >
                Create new account
              </a>
            </div>
            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-10 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={logInUser}
              >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
