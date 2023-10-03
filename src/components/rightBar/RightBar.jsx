"use client"
import { UiContext } from '@/providers/UiContext/MainUi'
import { CloseRounded, FavoriteBorderOutlined, FavoriteSharp, MoreHorizRounded, MusicNoteRounded, PlayArrowRounded, VerifiedRounded } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
// import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'

export const RightBar = () => {
  const{right, rightDispaly,setRightDisplay,setRight}=useContext(UiContext)
  let mouseOver = false
  const [likeColor, setLikeColor] = useState(false)
  const [showRightBar, setShowRightBar] = useState(true)
  const rightBar=useRef({width:"3"})
  
  
  const handleMouse=()=>{
    mouseOver=true
  }

  const handleLike = () => {
    likeColor?setLikeColor(!likeColor):setLikeColor(!likeColor)
  }
  const handleRightBar = () => {
    if (showRightBar) {
      setRight(showRightBar);
      setShowRightBar(!showRightBar)
      return
    }
    setRight(showRightBar)
    setRightDisplay("none")
    setShowRightBar(!showRightBar)
  }
  useEffect(() => {
    rightBar.current.width = right;
    
    switch( rightDispaly){
      case "block":
       setShowRightBar(true)
       break;
      case "none":
       setShowRightBar(false)
       break;
      default:
        break;
    }
  }, [right, rightDispaly])

 
  return (
    <div className={` col-span-3`} style={showRightBar ? {display:"block"} : {display:"block"}}>
      <main className='w-full h-full rounded-lg dark:bg-neutral-900 flex flex-col items-center overflow-y-scroll  scrollbar-thin scrollbar-thumb-neutral-500'>
        <div className='w-full p-2'>
            <div className='flex w-full items-center justify-between gap-9 py-2 px-3'>
              <Link href='/collection/tracks' className='font-semibold cursor-pointer hover:underline'>Liked Songs</Link>
              <button onClick={handleRightBar} className='w-8 h-8 text-lg transition-all duration-500 text-neutral-700 flex justify-center items-center rounded-full cursor-pointer hover:dark:bg-neutral-700 hover:text-neutral-50'>
                <CloseRounded className='w-7 h-7 transition-all duration-500 text-neutral-500 hover:text-neutral-50'/>
                </button>
            </div>
            <div className='flex w-full px-3 justify-center items-center relative mb-3'>
              <Image src="/spectreAllanWalker.png" alt="" width={320} height={320} className='object-cover rounded-lg cursor-pointer'/>
            </div>
            <div className='flex mx-3 mb-5'>
                <div className='w-9/12 flex flex-col mb-5'>
                    <Link href='/playlist/89r287t8yd93322f' className='font-semibold text-2xl mb-2 whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer hover:underline'>Spectre</Link>
                    <p className='font-normal flex text-base dark:text-zinc-400 whitespace-nowrap text-ellipsis overflow-hidden'>
                        <Link href='/artist/ewufi9fjiei23ji' className='mr-2 cursor-pointer hover:underline'>Jim Yosef, </Link>
                        <Link href='/artist/iwur30pu2048r' className='cursor-pointer whitespace-nowrap text-ellipsis overflow-hidden hover:underline'>Anna Yvette</Link>
                    </p>
                </div>
                <div className='w-3/12 flex items-center justify-end gap-3'>
              <span onClick={handleLike}>
                {likeColor ?
                <FavoriteSharp className="text-lg text-green-500 mr-2 cursor-pointer" />
                :
                <FavoriteBorderOutlined className='cursor-pointer mr-2 text-lg' />
                }
              </span>
                    <span><MoreHorizRounded className='cursor-pointer text-lg'/></span>
                </div>
                
            </div>
            <div className=' mx-3 flex items-center transition-all duration-500 justify-center mb-4 relative rounded-lg hover:scale-105 hover:mb-6'>
                <div className='w-full h-full rounded-lg absolute top-0 left-0 z-0 bg-neutral-950 dark:bg-opacity-40'></div>
                  <p className='absolute top-3 left-2 z-20 font-light text-sm'>
                   <span className='text-center '>
                    <VerifiedRounded className='dark:text-blue-500' />
                   </span>
                   <span className='text-xs font-medium'> Verified Artist</span>
                  </p>
               <Image src="/bien2.png" alt="" width={280} height={280} className='rounded-lg object-cover w-full h-full'/>
               <div className='absolute bottom-6 left-2 '>
               <p className='text-lg  z-20'>971,407 <span className='text-sm'>monthly listener</span></p>
               <p className='text-sm z-20'>Electronic music producer from Stolkholm,Sweden</p> 
               </div>
            </div>
            <div className='rounded-md mx-3 h-32 dark:bg-neutral-800 flex flex-col justify-center gap-4 px-3 '>
                <div className='w-full flex items-center justify-around gap-3'>
                    <span className='font-semibold text-base flex items-center'>Next in queue</span>
                    <Link href='/' className='font-medium text-sm dark:text-stone-300 items-center hover:underline'>Open queue</Link>
                </div>
                <div className='flex w-full items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-neutral-700' onMouseOver={handleMouse}>
                   <span className='w-1/6' id="nextMusic">{mouseOver?<PlayArrowRounded/>:<MusicNoteRounded/>}</span>
                   <Image src="/faded.jpg" alt="" width={45} height={45} className='rounded-lg object-cover'/>
                   <div className='w-3/6 flex flex-col justify-between gap-1 pl-2'>
                    <Link href='/playlist/eiu923if3fi3993' className='font-normal text-base hover:underline'>Faded</Link>
                    <Link href="/artist/2309r289nduiubhb" className='font-normal text-sm dark:text-zinc-400 whitespace-nowrap text-ellipsis overflow-hidden hover:underline'>Allan Walker</Link>
                   </div>
                </div>
            </div>
        </div>
      </main>
        
    </div>
  )
}
