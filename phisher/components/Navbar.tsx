import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-amber-100 flex justify-center items-center w-screen h-20 border-b border-opacity-55'>
            <div className='w-2/3 flex justify-between items-center'>
                <div className='flex justify-between items-center gap-2'>
                    <Image src={'./facebook.svg'} alt='logo' width={20} height={20} />
                    <p>Punchbowl</p>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <Link href={'./'}>Online Invitations</Link>
                    <Link href={'./'}>Greeting Cards</Link>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <Image src={'./search.svg'} alt='logo' width={20} height={20} />
                    <Link href={'./'}>Sign In</Link>
                </div>
            </div>
    </div>
  )
}

export default Navbar