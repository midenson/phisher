import React from 'react'

const Footer = () => {
  return (
    <div className='bottom-0 bg-amber-100 w-screen h-screen mt-10 flex justify-center items-center'>
        <div className='bg-red-500 w-2/3 h-full mt-3 flex flex-col items-center gap-5'>
            <div className='w-full h-14 bg-green-600'></div>
            <div className='w-full h-48 bg-green-600 flex justify-between items-center gap-2'>
                <div className='w-1/3 bg-blue-700 h-full'></div>
                <div className='w-1/3 bg-red-950 h-full'></div>
                <div className='w-1/3 bg-black h-full'></div>
            </div>
            <div className='w-full h-24 bg-green-600'></div>
            <div className='w-full h-14 bg-green-600'></div>
        </div>
    </div>
  )
}

export default Footer