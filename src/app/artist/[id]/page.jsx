"use client"
import { Footer } from '@/components/footer/Footer'
import { NavBar } from '@/components/navbar/NavBar'
import { UiContext } from '@/providers/UiContext/MainUi'
import { MoreHorizRounded, PlayArrow, Verified } from '@mui/icons-material'
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'

const ArtistId = () => {
  const { center } = useContext(UiContext)
  const centerBarWidth = useRef({ state:"col-span-5"})
  console.log(center);

  useEffect(() => {
    // router.refresh()
    centerBarWidth.current.state=center
  },[center])
  return (
    <div className={`${center?centerBarWidth.current.state: "col-span-5"} bg-red-700 rounded-md`} >
      <div className='w-full h-full rounded-md bg-cover relative scrollbar-thin scrollbar-thumb-neutral-700'>
      <Image src='/allanWalker.jpg' alt='' fill={true} className='object-cover rounded-lg sticky top-0' />
      <main className='w-full h-full rounded-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-800 absolute top-0 dark:bg-neutral-900 dark:bg-opacity-50'>
        <NavBar/>
       <div className='w-full h-52 flex flex-col justify-center pl-4'>
         <div className='h-1/6 flex items-center gap-2'>
           <span><Verified className='dark:text-sky-600'/></span>
           <span className='flex items-center font-medium text-sm'>Verified Artist</span>
         </div>
         <div className=' h-3/6 flex flex-col justify-center'>
           <span className='text-6xl dark:text-white font-black'>Alan Walker</span>
         </div>
         <div className='h-2/6 flex flex-col justify-center'>
           <p className='text-base font-medium'>31,976,259 <span className='text-sm'>monthly listeners </span></p>
        </div>
       </div>
        <div>
          <div className='w-full px-4 py-3 relative flex items-center gap-5 dark:bg-neutral-900 dark:bg-opacity-95'>
            <button className='w-14 h-14 flex items-center sticky top-16 justify-center rounded-full dark:bg-green-500 hover:dark:bg-green-400 cursor-pointer' role='play button'>
              <PlayArrow className='text-neutral-900 text-4xl'/>
            </button>
            <button className='ring-1 ring-white font-semibold text-xs py-2 px-3 rounded-2xl transition-all duration-300 hover:scale-105 hover:ring-2 hover:dark:bg-neutral-800 hover:dark:bg-opacity-80'>
              Follow
            </button>
            <button className='p-2 rounded-full cursor-pointer hover:dark:bg-neutral-800 hover:dark:text-white'>
              <MoreHorizRounded className='text-2xl dark:text-stone-400 hover:dark:text-white'/>
            </button>
          </div>
          <div className='dark:bg-neutral-900  px-4 pt-3'>
            <span className='mb-3 text-xl font-semibold'>Popular</span>
            <div className='w-full px-3 pt-2'>
             {/* Artist playList component */}
              <div className='w-full rounded-md flex items-center py-2 hover:dark:bg-neutral-800'>
                <div className='w-6/12 flex items-center'>
                  <span className='w-1/12 font-medium text-center text-sm dark:text-stone-400'>1</span>
                  <div className='w-2/12 flex justify-end'>
                    <Image src='/faded.jpg' alt='' width={45} height={45} className='object-cover'/>
                  </div>
                  <span className='w-9/12 pl-2 text-left font-normal text-base dark:text-stone-50 whitespace-nowrap overflow-hidden text-ellipsis'>Faded</span>
                </div>
                <div className='w-4/12 items-center justify-center '>
                   <span className='font-medium text-sm dark:text-stone-400'>1,900,783,200</span>
                </div>
                <div className='w-2/12 flex justify-center '>
                  <span className='font-medium text-sm dark:text-stone-400'>3:44</span>
                </div>
              </div>

            </div>
          </div>
          {/* Artist pick */}
          <div className='dark:bg-neutral-900 flex flex-col p-4 gap-2'>
            <span className='text-xl font-semibold'>Artist Pick</span>
            <div className='w-6/12 h-72 rounded-sm relative'>
              <Image src='/faded.jpg' alt='' fill={true} className='object-cover rounded-sm ' />
              <div className='w-full h-full relative top-0 left-0 dark:bg-gradient-to-t from-neutral-900/90 '>
              <div className='max-w-10/12 absolute top-2 left-2  flex items-center dark:bg-neutral-100 p-1 rounded-2xl'>
                <Image src='/allan.webp' alt='' width={25} height={25} className='object-cover rounded-full mr-2' />
                  <span className=' dark:text-black text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis pr-1'>
                    Posted by Jim Yosef
                  </span>
              </div>
                <div className='absolute bottom-3 left-4 flex items-center'>
                  <div className='w-12 h-12  relative'>
                    <Image src='/faded.jpg' alt='' fill={true} className='object-cover ' />
                  </div>  
                <div className='flex flex-col gap-1 pl-3 '>
                  <span className='text-sm'>Spectre</span>
                  <span className='dark:text-stone-400 text-xs'>Single</span>
                </div>
                </div>
                </div>
            </div>
          {/* about user */}
            <div className='dark:bg-neutral-900 flex flex-col py-4 gap-2'>
              <span className='text-xl font-semibold'>About</span>
              <div className='w-full h-96 overflow-hidden rounded-sm flex items-center relative'>
                <Image src='/pexels-wendy-wei-1190297.jpg' alt='' fill={true} className='object-cover w-full h-full rounded-sm ' />
                <div className='w-full h-full relative top-0 left-0 dark:bg-gradient-to-t from-neutral-900/75 '></div>
                  <div className='w-24 h-24 rounded-full p-2 flex flex-col justify-center items-center dark:bg-sky-600 dark:text-white absolute right-5 top-5 '>
                    <span className='text-xl font-semibold'>118 #</span>
                    <span className='text-xs font-normal'>in the world</span>
                   </div>
                <div className='absolute bottom-5 left-5 flex flex-col justify-center gap-2 px-1'>
                  <p className='font-semibold'>
                    <span className='text-base dark:text-white'>31,756,456  </span>
                    <span className='text-sm dark:text-white'>monthly listeners</span>
                  </p>
                  <p className='text-base dark:text-sm font-normal overflow-hidden text-ellipsis'>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, reiciendis, hic recusandae illo beatae eveniet quia quis obcaecati unde explicabo tempore qui tempora nesciunt, provident earum sequi necessitatibus repellat. Harum.
                  </p>
                   </div>
              </div>
            </div>
          </div>

        </div> 
       <Footer/>
        </main>
        </div>
    </div>
  )
}

export default ArtistId