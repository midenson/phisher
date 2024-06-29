import React from 'react'
import { SubmitButton } from '@/app/login/submit-button'

const SignInForm = () => {
  return (
    <form className="flex flex-col w-full justify-center">
            <label className="text-sm" htmlFor="name">
            <p className='text-sm'>First Name</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            name="name"
            placeholder=""
            required
            />
            <label className="text-sm" htmlFor="name">
            <p className='text-sm'>Last Name</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="name"
            name="name"
            placeholder=""
            required
            />
            <label className="text-sm" htmlFor="email">
            <p className='text-sm'>Email</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="email"
            name="email"
            placeholder=""
            required
            />
            <label className="text-sm" htmlFor="password">
            <p className='text-sm'>Password</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder=""
            required
            />
            <label className="text-sm" htmlFor="retype password">
            <p className='text-sm'>Password</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder=""
            required
            />
            <SubmitButton
            className="bg-green-600 rounded-md px-4 py-2 text-white mb-2"
            pendingText="Signing In..."
            >
            Sign Up
            </SubmitButton>
        </form>
  )
}

export default SignInForm