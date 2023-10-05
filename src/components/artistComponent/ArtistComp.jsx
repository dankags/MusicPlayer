import Image from 'next/image'
import React from 'react'

export const ArtistComp = () => {
  return (
    <div className='w-full p-2 rounded-md flex items-center cursor-pointer hover:dark:bg-neutral-800'>
       <div className='w-2/12 flex items-center'>
        <Image src='/allan.webp' alt='' width={48} height={48} className='rounded-full'/>
       </div>
       <div className='w-10/12 px-2 flex flex-col'>
          <span className='text-base font-medium'>Lady Jaydee</span>
          <span className='dark:text-stone-400 text-sm font-normal'>Artist</span>
       </div>
    </div>
  )
}
