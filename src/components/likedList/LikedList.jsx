import { FavoriteSharp, PlayArrowRounded } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

export const LikedList = () => {
  return (
    <div className='flex py-2 mx-4 rounded-md hover:dark:bg-neutral-800'>
    <div className='w-6/12 pl-4 flex items-center'>
      <div className='flex items-center'>
        <PlayArrowRounded className='text-lg'/>
      </div>
      <div className='h-10 w-10 mx-4'>
        <Image src='/ab67616d0000b273726830445abf56cfff430dcf.jpg' alt='' width={200} height={200} className='w-full h-full object-cover rounded-sm'/>
      </div>
      <div className='flex flex-col'>
        <span className='text-base font-normal '>Link</span>
        <span className='text-sm text-stone-400'>Jim Yosef</span>
      </div>
    </div>
    <div className='w-3/12 flex items-center justify-start'>
       <span className='font-normal text-sm text-stone-400'>Link</span>
    </div>
    <div className='w-3/12 pl-2 flex items-center justify-start'>
      <span className='w-3/12 flex justify-end'><FavoriteSharp className='text-lg dark:text-green-500 cursor-pointer'/></span>
      <div className='w-9/12  text-sm text-stone-400'>
        <span className='w-full pl-6 text-sm font-normal'>3:44</span>
      </div>
    </div>
  </div>
  )
}
