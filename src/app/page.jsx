"use client"
import { Footer } from '@/components/footer/Footer'
import { NavBar } from '@/components/navbar/NavBar'
import { PlayArrowRounded, PlayArrowSharp } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import './page.globals.css'
import { useContext, useEffect, useRef, useState } from 'react'
import {useUiContext } from '@/providers/UiContext/MainUi'
import { useSession } from 'next-auth/react'
import { recommended } from '@/data/dummyData'
import { useVibrantColor } from '@/utils/customHooks'
import { twMerge } from 'tailwind-merge'
// import {cloudInary} from "@/utils/cloudinaryConfig"

export default function Home() {
  const { data } = useSession()
  const pageRef=useRef()
  const { center } = useUiContext()
  const [centerBarWidth, setCenterBarWidth] = useState('5');
  const [pageWidth, setPageWidth] = useState(null)
  const [containerColor,setContainerColor]=useState("#1e3a8a")
  

  useEffect(() => {
    // router.refresh()
    const pageCurrentWidth = pageRef.current.clientWidth
    setPageWidth(pageCurrentWidth)
    setCenterBarWidth(center);
  },[center])
  return (
    <div ref={pageRef} className={` dark:bg-neutral-900 rounded-md  ${center ?center:'col-span-8'}`} >
    <div className='overflow-y-scroll w-full h-full relative rounded-md scrollbar-thin scrollbar-thumb-neutral-700  '>
      <div className={`w-full mb-4`} style={{backgroundImage:`linear-gradient(0deg,#171717,${containerColor})`}}>
        
          <div className=' fixed z-10' style={{ width: `${pageWidth}px` }}><NavBar position={""} /> </div>
          <div className='w-full h-16'></div>
        <span className='text-3xl font-semibold px-4 pt-10'>Good afternoon</span>
          <div className='w-full mt-3 px-3 flex justify-between gap-2 flex-wrap'>
            {recommended.map((item,i)=>
            <UserRecomended key={i} pageWidth={pageWidth} data={item} setContainerColor={setContainerColor}/>
            )
          }
          

    </div>

      </div>
    <div className='pt-4'>
      <div className='flex items-center justify-between px-5'>
        <span className='text-xl font-semibold'>Made For Danielkagombe</span>
        <Link href="/" className='text-xs font-semibold text-stone-400 hover:underline'>Show all </Link>
      </div>
        <UserPlayListHandler>   
          <UserPlayList/>
          <UserPlayList/>
          <UserPlayList/>
          <UserPlayList/>
        </UserPlayListHandler>

       </div>
      
        <Footer />
       

    </div>
  </div>
  )
}

const UserRecomended = ({ pageWidth, data, setContainerColor }) => {
  const color=useVibrantColor(data.img)
  
   
  return (
    <div onMouseOut={()=>setContainerColor("#1e3a8a")} onMouseOver={()=>setContainerColor(color)} className={`featuredMusics max-h-44 max-w-[305px] cursor-pointer flex items-center rounded-md gap-2 transition-all  ease-in-out  dark:bg-neutral-500/40 hover:duration-300 hover:bg-neutral-500/75 ${pageWidth<=642?'w-[282px] max-sm:w-64 md:w-[281px]':'w-[305px] md:w-[305px]'}`}>
            <div className='w-4/12 h-20 relative flex justify-start'>
              <Image src={data.img} alt='' width={300} height={320} className='object-cover rounded-s-md'/> 
            </div>
            <div className='w-5/12'>
        <span className='dark:text-white text-sm font-bold'>{data.name }</span>
            </div>
            <div className='w-3/12 flex items-center justify-center'>
              <button className='featuredmusicBtn w-12 h-12 rounded-full shadow-md shadow-neutral-800 flex justify-center items-center transition-all ease-in-out dark:bg-green-500 hover:dark:bg-green-400 '><PlayArrowRounded className='text-3xl dark:text-neutral-900'/></button>
            </div>
          </div>
  )
}

const UserPlayListHandler = ({children,className,number=3}) => {
  return (
    <div className={`px-5 flex justify-between gap-2 mt-4`} >
      {children}
     </div>
   )
}

const UserPlayList = () => {
     
  return (
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
   )
}