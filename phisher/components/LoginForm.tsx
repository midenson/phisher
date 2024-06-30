import React from 'react'
import { SubmitButton } from '@/app/login/submit-button'
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation';


const LoginForm = () => {
  const supabase_url = 'https://dkabkqkvvoiykaouhrvc.supabase.co';
  const supabase_anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrYWJrcWt2dm9peWthb3VocnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4OTg4MzMsImV4cCI6MjAzNDQ3NDgzM30.Zm5SUO2H4NYHbwi4XksMwWtJq7KO8YpiXFHaHj-89Mg';
  const supabase = createClient(
    supabase_url,
    supabase_anon
  )

const signin = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: 'olatunjinaheem012@email.com',
    password: 'password'
  });
  if (!error) {
    redirect('./protected');
  }
}


  return (
    <form className="flex flex-col w-full justify-center">
            <label className="text-sm" htmlFor="email">
            <p className='text-sm'>Email</p>
            </label>
            <input
            className="rounded-none px-4 py-2 bg-inherit border mb-6"
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
            <SubmitButton
            formAction={signin}
            className="bg-green-600 rounded-md px-4 py-3 text-white text-lg mb-2"
            pendingText="Signing In..."
            >
            Sign In
            </SubmitButton>
        </form>
  )
}

export default LoginForm