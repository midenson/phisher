import Image from 'next/image'
import React from 'react'

const Signingoogle = ({btnText, icon}) => {
  return (
    <button type="button" className="login-with-google-btn w-full h-14 flex justify-start gap-4 items-center hover:bg-slate-500" >
        <Image src={`${icon}.svg`} alt='provider' width={20} height={20} />
        <p>{btnText}</p>
    </button>
  )
}

export default Signingoogle