import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bottom-0 bg-amber-100 w-screen h-screen mt-10 flex justify-center items-center'>
        <div className='bg-red-500 w-2/3 h-full mt-3 flex flex-col items-center gap-5'>
            <div className='w-full h-14 flex justify-between items-center'>
              <div className='flex justify-between items-center gap-3'>
                <Image src={'./appstore.svg'} alt='appstore' width={130} height={75} />
                <Image src={'./googleplay.svg'} alt='playstore' width={130} height={75} />
              </div>
              <div className='flex justify-between items-center gap-3'>
                <Image src={'./instagram.svg'} alt='instagram' width={40} height={40} />
                <Image src={'./pinterest.svg'} alt='pinterest' width={40} height={40} />
                <Image src={'./facebook.svg'} alt='facebook' width={40} height={40} />
                <Image src={'./twitter.svg'} alt='twitter' width={40} height={40} />
              </div>
            </div>
            <div className='border-b border-opacity-55 w-full h-48 bg-green-600 flex justify-between items-center gap-2'>
                <div className='w-1/3 bg-blue-700 h-full flex flex-col justify-start items-center gap-3'>
                  <div className='text-xl font-semibold'>About Us</div>
                    <div className='w-full border-b'></div>
                    <Link href={'./'}>Company overview</Link>
                    <Link href={'./'}>News</Link>
                    <Link href={'./'}>Partner With Us</Link>
                </div>
                <div className='w-1/3 bg-red-950 h-full flex flex-col justify-start items-center gap-3'>
                <div className='text-xl font-semibold'>More</div>
                    <div className='w-full border-b'></div>
                    <Link href={'./'}>Company overview</Link>
                    <Link href={'./'}>News</Link>
                    <Link href={'./'}>Partner With Us</Link>
                    <Link href={'./'}>Partner With Us</Link>
                </div>
                <div className='w-1/3 h-full flex flex-col justify-start items-center gap-3'>
                <div className='text-xl font-semibold'>Get In Touch</div>
                    <div className='w-full border-b'></div>
                    <Link href={'./'}>Company overview</Link>
                    <Link href={'./'}>News</Link>
                    <Link href={'./'}>Partner With Us</Link>
                </div>
            </div>
            <div className='w-full h-24 bg-green-600'></div>
            <div className='w-full h-14 bg-green-600'></div>
        </div>
    </div>
  )
}

export default Footer