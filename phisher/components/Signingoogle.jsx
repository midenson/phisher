import Image from 'next/image'
import React from 'react'

const Signingoogle = ({btnText, icon}) => {
  return (
    <button type="button" className="login-with-google-btn border border-opacity-50 w-full h-14 flex justify-start gap-4 items-center hover:bg-slate-500" >
        <Image src={`${icon}.svg`} alt='provider' width={30} height={30} />
        <p className='text-lg font-thin text-gray-600'>{btnText}</p>
    </button>
  )
}

export default Signingoogle