import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'


const ButtonIcon = () => {
  return (
    <Button variant={'secondary'} className='bg-green-500 w-11/12 text-white h-12 flex justify-center items-center gap-3 hover:bg-green-800'>
        <Image src={'./mail.svg'} alt='mail' width={20} height={20} />
        <p className='text-[14px]'>Sign up with email</p>
    </Button>
  )
}

export default ButtonIcon