import ButtonIcon from '@/components/ButtonIcon'
import CreateForm from '@/components/CreateForm'
import Footer from '@/components/Footer'
import FooterMobile from '@/components/FooterMobile'
import Navbar from '@/components/Navbar'
import Signingoogle from '@/components/Signingoogle'
import Link from 'next/link'
import React from 'react'
import NavMobile from '../../components/NavMobile'

const signin = () => {
  return (
    <div className='w-screen'>
        <NavMobile />
          <div className='mt-10 flex justify-center items-center'>
            <div className='flex items-center flex-col border border-opacity-65 rounded-sm w-[400px] h-[450px]'>
                <div className='flex flex-col justify-center items-center gap-3 w-10/12 h-1/3'>
                    <p className='text-[30px] text-gray-600'>Create Your Account</p>
                    <ButtonIcon />
                </div>
                <div className=' bg-gray-300 w-full h-10 flex justify-center items-center mt-3 border-t border-b'>OR</div>
                <div className='flex justify-center items-center w-10/12 h-2/3'>
                <div className='w-11/12 h-9/12 flex justify-between gap-3 items-center flex-col'>
                    <Signingoogle btnText={'Sign in with google'} icon={'google'} />
                    <Signingoogle btnText={'Sign in with facebook'} icon={'facebook'} />
                    <Signingoogle btnText={'Sign in with Apple'} icon={'apple'} />
                </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center mt-5'>
            <Link href={'./'} className='text-blue'>Have an account? Sign in</Link>
        </div>
        <FooterMobile />
    </div>
  )
}

export default signin