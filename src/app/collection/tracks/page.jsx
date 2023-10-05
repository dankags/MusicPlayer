"use client"
import { Footer } from '@/components/footer/Footer'
import { LikedList } from '@/components/likedList/LikedList'
import { NavBar } from '@/components/navbar/NavBar'
import { AccessTimeRounded, FavoriteSharp, PlayArrow, PlayArrowRounded } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import './global.css'

const Tracks = () => {
  const handleScroll = (e) => {
    const tableHeader = document.getElementById("tableHeader");
    const table=document.querySelector("#table")
    if (e.target.scrollTop>0) {
      tableHeader.style.backgroundColor = 'rgba(10,10,10,.95)'
      table.className="w-full transtion-all duration-100 dark:bg-neutral-900 "
      return
    } 
    tableHeader.style.backgroundColor="transparent"
    table.className="w-full transtion-all duration-100 listContainer"
  }

  return (
    <div className={` h-full rounded-lg overflow-y-scroll container ${center ?center:'col-span-8'}`}  onScrollCapture={handleScroll}>
      <main className='relative  rounded-lg dark:bg-gradient-to-t from-neutral-950 to-indigo-500/50 '>
          <NavBar />
      <div className='h-60 w-full flex pl-4 pb-4 relative items-end bg-[rgb(80, 56, 160)]'>
        <div className='pb-1 w-4/12 '>
          <Image src='/likedSongs.png' alt='likedImage' width={200} height={200} className='shadow-xl shadow-neutral-800'/>
       </div>
       <div className='pb-1 pl-4 w-9/12'>
         <section>
           <div className='mb-2'>
             <span className='font-medium text-neutral-50'>Playlist</span>
           </div>
           <div>
             <span className='w-full text-6xl text-neutral-50 font-bold whitespace-nowrap text-ellipsis overflow-hidden'>Liked Songs</span>
           </div>
           <div className='flex items-center mt-7'>
            <div className='h-6 w-6 mr-2'>
             <Image src='/crow.jpg' alt='userProfile' width={250} height={250} className='w-full h-full rounded-full object-cover'/>
             </div>
             <span className='mr-2 text-sm text-neutral-50 font-semibold '>Danielkagombe .</span>
             <span className='text-sm text-neutral-50 font-medium'>12 songs</span>
           </div>
         </section>
       </div>
      </div>
      <div id='table' className='w-full listContainer'>
      
        <div className='px-4 py-3 relative '>
          <button className='w-14 h-14 flex items-center sticky top-16 justify-center rounded-full dark:bg-green-500 hover:dark:bg-green-400 cursor-pointer' role='play button'>
            <PlayArrow className='text-neutral-900 text-4xl'/>
          </button>
        </div>
        <div className='relative '>
           <div id='tableHeader' className='m-2 flex flex-col sticky top-14 '>
            <div className='flex py-1 mx-4 '>
             <span className='w-6/12 pl-4 flex items-center dark:text-stone-400 text-sm '>#  Title</span>
             <span className='w-3/12 flex items-center justify-start dark:text-stone-400 text-sm'>Album</span>
             <span className='w-3/12 flex items-center justify-center'><AccessTimeRounded className=' dark:text-stone-400 text-xl' /></span>
             </div>
             <div className='px-6 mb-4'> 
               <hr className='dark:border-neutral-700 mt-2'/>
              </div>
            </div> 
             <LikedList/>
             <LikedList/>
             <LikedList/>
             <LikedList/>
             <LikedList/>
             <LikedList/>
             <LikedList/>
        </div>
      </div>
      <Footer/>
      </main>
      </div>
  )
}

export default Tracks