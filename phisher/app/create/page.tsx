import CreateForm from '@/components/CreateForm'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen'>
        <Navbar />
        <CreateForm />
    </div>
  )
}

export default page