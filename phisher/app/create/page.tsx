import CreateForm from '@/components/CreateForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen'>
        <Navbar />
        <CreateForm />
        <div className='flex justify-center items-center mt-5'>
            <Link href={'./'} className='text-blue'>Have an account? Sign in</Link>
        </div>
        <Footer />
    </div>
  )
}

export default page