import { Verified } from '@mui/icons-material'
import React from 'react'

export const Holder = () => {
  return (
    <div className='w-full h-52 flex flex-col justify-center pl-4 '>
    <div className='h-1/6 flex items-center gap-2'>
      <span><Verified className='dark:text-sky-600'/></span>
      <span className='flex items-center font-medium text-sm'>Verified Artist</span>
    </div>
    <div className=' h-3/6 flex flex-col justify-center'>
       <span className='text-6xl dark:text-white font-extrabold'>Alan Walker</span>
    </div>
    <div className='h-2/6 flex flex-col justify-center'>
      <p className='text-base font-medium'>31,976,259 <span className='text-sm'>monthly listeners</span></p>
    </div>
  </div>

  )
}
