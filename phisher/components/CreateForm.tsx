import React from 'react'
import ButtonIcon from './ButtonIcon'
import Signingoogle from './Signingoogle'

const CreateForm = () => {
  return (
    <div className='mt-10 flex justify-center items-center'>
        <div className='flex items-center flex-col border border-opacity-65 rounded-sm w-1/3 h-[450px]'>
            <div className='bg-red-500 flex flex-col justify-center items-center gap-3 w-10/12 h-1/3 mt-5'>
                <p className='text-[30px] text-gray-600'>Create Your Account</p>
                <ButtonIcon />
            </div>
            <div className=' bg-gray-300 w-full h-10 flex justify-center items-center'>OR</div>
            <div className='flex flex-col justify-between items-center gap-3 w-10/12'>
                <Signingoogle />
                <Signingoogle />
                <Signingoogle />
            </div>
        </div>
    </div>
  )
}

export default CreateForm