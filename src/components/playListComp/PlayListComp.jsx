import Image from 'next/image'
import React from 'react'

export const PlayListComp = () => {
  return (
    <div className=' w-full p-2 rounded-md flex items-center cursor-pointer hover:dark:bg-neutral-800'>
        <div className='w-2/12 flex items-center'>
        <Image src='/playlist.webp' alt='' width={50} height={50} className='rounded-lg'/>
       </div>
       <div className='w-10/12 px-2 flex flex-col'>
          <span className='text-base font-normal'>Lady Jaydee</span>
          <span className='dark:text-stone-400 text-sm font-normal'>playlist</span>
       </div>
    </div>
  )
}
