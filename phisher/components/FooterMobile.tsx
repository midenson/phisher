import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const FooterMobile = () => {
  return (
    <div className='h-screen w-1/3 bg-amber-100 ml-10 flex justify-center items-center'>
        <div className='w-11/12 h-full flex flex-col items-center gap-2'>
            <div className='w-full flex flex-col justify-evenly items-center mt-5'>
                <div className='flex items-center gap-3'>
                    <Image src={'./instagram.svg'} alt='instagram' width={40} height={40} />
                    <Image src={'./pinterest.svg'} alt='pinterest' width={40} height={40} />
                    <Image src={'./facebook.svg'} alt='facebook' width={40} height={40} />
                    <Image src={'./twitter.svg'} alt='twitter' width={40} height={40} />
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    <Image src={'./appstore.svg'} alt='appstore' width={120} height={75} />
                    <Image src={'./googleplay.svg'} alt='playstore' width={120} height={75} />
                </div>
                <div className='w-full border-b mb-2 '></div>
            </div>
            <div className='w-full flex flex-col gap-2 items-center'>
                <Button className='bg-amber-100 gap-2 h-11 mb-3 hover:bg-amber-300' variant={'outline'}><Image src={'./wheelchair.svg'} alt='wheelchair' width={20} height={20}/>Enable Accesibility Options </Button>
                <Button className='gap-2 h-11 bg-amber-100 hover:bg-amber-300 w-full' variant={'outline'}>Back To Top<Image src={'./top.svg'} alt='wheelchair' width={20} height={20}/></Button>
                <Button variant={'outline'} className='w-full bg-amber-100 hover:bg-amber-300'>Get Help</Button>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <div><p className='text-[13px]'>© 2024 Sincere Corporation</p></div>
                <div className='flex justify-between items-center gap-2'>
                <Link className='text-[11px]' href={'./'}>Terms of use</Link>
                <Link className='text-[11px]' href={'./'}>Privacy Policy</Link>
                <Link className='text-[11px]' href={'./'}>Do Not Sell My Info</Link>
                <Link className='text-[11px]' href={'./'}>CA Privacy Notice</Link>
                </div>
            </div>
            <div className='w-full flex justify-between items-center gap-2 flex-col text-gray-600'>
              <p className='text-[10px]'>PUNCHBOWL® is a registered trademark of Sincere Corporation. All rights reserved. All other product and company names are trademarks or registered trademarks of their respective holders.</p>
              <p className='text-[10px]'>*Amazon.com Gift Cards ("GCs") sold by Sincere Corporation, an authorized and independent reseller of Amazon.com Gift Cards. Except as required by law, GCs cannot be transferred for value or redeemed for cash. GCs may be used only for purchases of eligible goods on Amazon.com or certain of its affiliated websites. For complete terms and conditions, see http://www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation. ©, ®, ™ Amazon.com Inc. and/or its affiliates, 2024.</p>
              <div className='border-t h-12'>A RAPTIVE PARTNER SITE</div>
            </div>
        </div>
    </div>
  )
}

export default FooterMobile