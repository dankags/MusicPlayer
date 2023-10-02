import { PushPin, VolumeUpRounded } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const LikedSongs = () => {
  return (
    <Link href='/collection/tracks' className='no-underline'>
    <div className='mb-2 p-2 rounded-lg flex w-full items-center cursor-pointer dark:bg-neutral-800 hover:dark:bg-neutral-700'>
       <div className='w-1/6'>
          <Image src='/likedSongs.png' alt='' width={50} height={50} className='rounded-lg'/>
       </div>
       <div className='w-4/6 px-2'>
         <div>
            <span className='mb-2 text-base font-normal dark:text-green-500'>Liked Songs</span>
         </div>
         <div className='flex items-center'>
            <span className='mr-2 text-xs text-green-500'>
                <PushPin className='text-sm rotate-45'/>
            </span>
            <span className='text-sm font-normal dark:text-stone-400 whitespace-nowrap text-ellipsis overflow-hidden'>
                PlayList . 12 songs
            </span>
         </div>
       </div>
       <div className='w-1/6'>
         <span className='flex items-center justify-center text-lg dark:text-green-500'>
          <VolumeUpRounded/>
         </span>
       </div>
    </div>
    </Link>
  )
}
