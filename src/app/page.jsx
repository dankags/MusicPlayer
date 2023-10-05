"use client"
import { Footer } from '@/components/footer/Footer'
import { NavBar } from '@/components/navbar/NavBar'
import { PlayArrowRounded, PlayArrowSharp } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import './page.globals.css'
import { useContext, useEffect, useState } from 'react'
import { UiContext } from '@/providers/UiContext/MainUi'
import { useSession } from 'next-auth/react'
// import {cloudInary} from "@/utils/cloudinaryConfig"

export default function Home() {
  const {data}=useSession()
  const { center } = useContext(UiContext)
  const [centerBarWidth, setCenterBarWidth] = useState('5');
  
  useEffect(() => {
    // cloudInary.v2.uploader("/crow.jpg", { public_id: "crow" }, (error, result) => {
    //   error ?
    //     console.log(error)
    //     :
    //     console.log(result);
    // })
  },[])

  useEffect(() => {
    // router.refresh()
    setCenterBarWidth(center);
  },[center])
  return (
    <div className={`h-full dark:bg-neutral-900 rounded-md  ${center ?center:'col-span-8'}`}>
    <div className='overflow-y-scroll w-full h-full relative rounded-md scrollbar-thin scrollbar-thumb-neutral-700  '>
      <div className='sticky top-0 left-0 bg-blue-900 transparent z-10'><NavBar /></div>  
      <div className='w-full mb-4 dark:bg-gradient-to-t from-neutral-900 to-blue-900 '>
        
        <span className='text-3xl font-semibold px-4'>Good afternoon</span>
        <div className='w-full mt-3 px-3 flex justify-between gap-2 flex-wrap'>

          <div className='featuredMusics w-72 cursor-pointer flex items-center rounded-md gap-2 transition-all  ease-in-out  dark:bg-neutral-500/40 hover:duration-300 hover:bg-neutral-500/75'>
            <div className='w-4/12 h-20 relative flex justify-start'>
              <Image src='/playlist.webp' alt='' fill={true} className='object-fill rounded-s-md'/> 
            </div>
            <div className='w-5/12'>
              <span className='dark:text-white text-sm font-semibold'>This is Jim Yosef</span>
            </div>
            <div className='w-3/12 flex items-center justify-center'>
              <button className='featuredmusicBtn w-12 h-12 rounded-full shadow-md shadow-neutral-800 flex justify-center items-center transition-all ease-in-out dark:bg-green-500 hover:dark:bg-green-400 '><PlayArrowRounded className='text-3xl dark:text-neutral-900'/></button>
            </div>
          </div>

          <div className='featuredMusics w-72 cursor-pointer flex items-center rounded-md gap-2 transition-all  ease-in-out  dark:bg-neutral-500/40 hover:duration-300 hover:bg-neutral-500/75'>
            <div className='w-4/12 h-20 relative flex justify-start'>
              <Image src='/playlist.webp' alt='' fill={true} className=' object-fill rounded-s-md'/> 
            </div>
            <div className='w-5/12'>
              <span className='dark:text-white text-sm font-semibold'>This is Jim Yosef</span>
            </div>
            <div className='w-3/12 flex items-center justify-center'>
              <button className='featuredmusicBtn w-12 h-12 rounded-full shadow-md shadow-neutral-800 flex justify-center items-center transition-all ease-in-out dark:bg-green-500 hover:dark:bg-green-400 '><PlayArrowRounded className='text-3xl dark:text-neutral-900'/></button>
            </div>
          </div>

          <div className='featuredMusics w-72 cursor-pointer flex items-center rounded-md gap-2 transition-all  ease-in-out  dark:bg-neutral-500/40 hover:duration-300 hover:bg-neutral-500/75'>
            <div className='w-4/12 h-20 relative flex justify-start'>
              <Image src='/playlist.webp' alt='' fill={true} className=' object-fill rounded-s-md'/> 
            </div>
            <div className='w-5/12'>
              <span className='dark:text-white text-sm font-semibold'>This is Jim Yosef</span>
            </div>
            <div className='w-3/12 flex items-center justify-center'>
              <button className='featuredmusicBtn w-12 h-12 rounded-full shadow-md shadow-neutral-800 flex justify-center items-center transition-all ease-in-out dark:bg-green-500 hover:dark:bg-green-400 '><PlayArrowRounded className='text-3xl dark:text-neutral-900'/></button>
            </div>
          </div>

          <div className='featuredMusics w-72 cursor-pointer flex items-center rounded-md gap-2 transition-all  ease-in-out  dark:bg-neutral-500/40 hover:duration-300 hover:bg-neutral-500/75'>
            <div className='w-4/12 h-20 relative flex justify-start'>
              <Image src='/playlist.webp' alt='' fill={true} className=' object-fill rounded-s-md'/> 
            </div>
            <div className='w-5/12'>
              <span className='dark:text-white text-sm font-semibold'>This is Jim Yosef</span>
            </div>
            <div className='w-3/12 flex items-center justify-center'>
              <button className='featuredmusicBtn w-12 h-12 rounded-full shadow-md shadow-neutral-800 flex justify-center items-center transition-all ease-in-out dark:bg-green-500 hover:dark:bg-green-400 '><PlayArrowRounded className='text-3xl dark:text-neutral-900'/></button>
            </div>
          </div>

    </div>

      </div>
    <div className='pt-4'>
      <div className='flex items-center justify-between px-5'>
        <span className='text-xl font-semibold'>Made For Danielkagombe</span>
        <Link href="/" className='text-xs font-semibold text-stone-400 hover:underline'>Show all </Link>
      </div>
      <div className='px-5 flex justify-between gap-2 mt-4'>
        {/* playList card */}
        <div className='playListCard w-48 p-3 flex flex-col justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700/80'>
          <div>
          <div className='relative w-full h-36 '>
            <div className='w-full h-36 relative shadow-md shadow-neutral-900'>
               <Image src="/crow.jpg" alt='' fill={true} className='object-cover rounded-lg '/>
            </div>
            <div className='w-full h-full absolute rounded-lg top-0 left-0 bg-gradient-to-bl from-pink-600/40 to-blue-700/40'></div>
            <span className='w-14  absolute left-2 bottom-2 text-xs font-bold text-white ' >Discover weekly </span>
            <button className='playListCardBtn  w-10 h-10 absolute right-2 bottom-2 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-500'>
              <PlayArrowSharp className='text-neutral-950'/>
              </button>
              </div>
          </div>
          <div className='flex flex-col gap-3 justify-between pt-3'>
            <span className='text-base font-bold text-white '>Discover weekly</span>
            <p className='font-medium text-xs text-stone-400 overflow-hidden text-ellipsis'>Your weekly mixtape of fresh music. Enjoy Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
           {/*other clones  */}
          
           <div className='playListCard w-48 p-3 flex flex-col justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700/80'>
          <div>
          <div className='relative w-full h-36 '>
            <div className='w-full h-36 relative shadow-md shadow-neutral-900'>
               <Image src="/crow.jpg" alt='' fill={true} className='object-cover rounded-lg '/>
            </div>
            <div className='w-full h-full absolute rounded-lg top-0 left-0 bg-gradient-to-bl from-pink-600/40 to-blue-700/40'></div>
            <span className='w-14  absolute left-2 bottom-2 text-xs font-bold text-white ' >Discover weekly </span>
            <button className='playListCardBtn  w-10 h-10 absolute right-2 bottom-2 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-500'>
              <PlayArrowSharp className='text-neutral-950'/>
              </button>
              </div>
          </div>
          <div className='flex flex-col gap-3 justify-between pt-3'>
            <span className='text-base font-bold text-white '>Discover weekly</span>
            <p className='font-medium text-xs text-stone-400 overflow-hidden text-ellipsis'>Your weekly mixtape of fresh music. Enjoy Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>

        <div className='playListCard w-48 p-3 flex flex-col justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700/80'>
          <div>
          <div className='relative w-full h-36 '>
            <div className='w-full h-36 relative shadow-md shadow-neutral-900'>
               <Image src="/crow.jpg" alt='' fill={true} className='object-cover rounded-lg '/>
            </div>
            <div className='w-full h-full absolute rounded-lg top-0 left-0 bg-gradient-to-bl from-pink-600/40 to-blue-700/40'></div>
            <span className='w-14  absolute left-2 bottom-2 text-xs font-bold text-white ' >Discover weekly </span>
            <button className='playListCardBtn  w-10 h-10 absolute right-2 bottom-2 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-500'>
              <PlayArrowSharp className='text-neutral-950'/>
              </button>
              </div>
          </div>
          <div className='flex flex-col gap-3 justify-between pt-3'>
            <span className='text-base font-bold text-white '>Discover weekly</span>
            <p className='font-medium text-xs text-stone-400 overflow-hidden text-ellipsis'>Your weekly mixtape of fresh music. Enjoy Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
          

      </div>
       </div>
      
      <Footer/>

    </div>
  </div>
  )
}
