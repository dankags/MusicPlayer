"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { ArtistComp } from '../artistComponent/ArtistComp'
import { LikedSongs } from '../LikedSongs/LikedSongs'
import { PlayListComp } from '../playListComp/PlayListComp'
import { AddRounded, ArrowDropDown, ArrowForwardRounded, CloseRounded, HomeOutlined, HorizontalSplit, Search, SearchOutlined } from '@mui/icons-material'
import Link from 'next/link'
import { UiContext } from '@/providers/UiContext/MainUi'

export const LeftBar = () => {
  const { left,setLeft } = useContext(UiContext)
  const [leftBarWidth, setLeftBarWidth] = useState("3")
  const leftVisibility = useRef({ state:false})
  

  useEffect(() => {
    setLeftBarWidth(left);
  },[left])
  
  const handleClick = () => {
    if (leftVisibility.current.state) {
      setLeft(leftVisibility.current.state)
      leftVisibility.current.state=false
      return
    }
    setLeft(leftVisibility.current.state)
    leftVisibility.current.state=true
      
}

  return (
    <div className={`col-span-${left?leftBarWidth:"3"}`}>
        <main className=' h-full rounded-md'>
            <div className='w-full h-1/6 dark:bg-neutral-900 rounded-lg px-2 mb-2 flex flex-col justify-center '>
               <Link href='/' className='no-underline flex items-center mb-2 h-8 pl-3 text-neutral-400 hover:text-neutral-50'>
                <span className='mr-2'>
                  <HomeOutlined className='text-3xl'/>
                </span>
                <span className='text-base font-medium '>Home</span>
               </Link>
               <Link href='/search' className='no-underline flex items-center h-8 pl-3 text-neutral-400 hover:text-neutral-50'>
                <span className='mr-2'> 
                  <SearchOutlined className='text-3xl'/>
                </span>
                <span className='text-base font-medium'>Search</span>
               </Link>
            </div>

            <div className='w-full h-5/6 flex flex-col dark:bg-neutral-900 rounded-lg px-2'>
               <div className='h-1/6 flex px-2 items-center justify-between gap-4'>
                 <div className='pr-3 text-neutral-400  hover:text-neutral-50 cursor-pointer flex items-center'>
                    <span>
                      <HorizontalSplit className='rotate-90 text-3xl'/>
                    </span>
                    <span className='ml-2'>Your Libray</span>
                 </div>
                 <div className='flex items-center justify-between gap-2'>
                    <span className='p-1 rounded-full text-neutral-400 hover:dark:bg-neutral-800 hover:text-neutral-50 cursor-pointer'>
                      <AddRounded/>
                    </span>
                    <span className='p-1 rounded-full text-neutral-400 hover:dark:bg-neutral-800 hover:text-neutral-50 cursor-pointer' onClick={handleClick}>
                     <ArrowForwardRounded/>  
                    </span>
                 </div>
               </div>
               <div className='h-5/6 flex flex-col'>
                 <div className='w-full h-1/6 flex px-3 items-center gap-2 overflow-x-scroll scrollbar scrollbar-thin scrollbar-thumb-neutral-500'>
                   <div className='flex items-center'>
                    <span className='w-8 h-8 dark:bg-neutral-800 flex justify-center items-center rounded-full cursor-pointer hover:dark:bg-neutral-700'>
                      <CloseRounded className='text-xl'/>
                    </span>
                    <div className='p-1 ml-2 rounded-2xl dark:bg-neutral-50 cursor-pointer'>
                    <span className='font-semibold text-xs text-neutral-900 p-1 rounded-2xl '>PlayLists</span>
                    </div>
                   </div>
                   <div className='mr-2'>
                    <div className='p-1 rounded-2xl dark:bg-neutral-800 cursor-pointer hover:dark:bg-neutral-700'>
                    <span className='font-semibold text-xs text-neutral-50 p-1 whitespace-nowrap'>By You</span>
                    </div>
                   </div>
                  

                 </div>

                  <div className='h-5/6 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-neutral-500'>
                  <div className='p-0 h-1/6 flex items-center justify-between'>
                     <span className='w-8 h-8 ml-2 text-neutral-700 flex justify-center items-center rounded-full cursor-pointer hover:dark:bg-neutral-700 hover:text-neutral-50'>
                       <Search/>
                     </span>
                     <button className='mr-2 text-sm font-medium dark:text-stone-400 hover:dark:text-white'>
                        Resent <ArrowDropDown className='dark:text-stone-400 hover:dark:text-white'/>
                     </button>
                  </div>
                  <div className='h-5/6 mx-2 pb-2 '>
                    <LikedSongs/>
                    <PlayListComp/>
                    <ArtistComp/>
                    <PlayListComp/>
                    <ArtistComp/>
                    <PlayListComp/>
                    <ArtistComp/>
                    <PlayListComp/>
                    <ArtistComp/>
                    </div>
                  </div>
               </div>
            </div>
        </main>
    </div>
  )
}
