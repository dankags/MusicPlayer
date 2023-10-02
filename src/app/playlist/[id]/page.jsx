"use client"
import { ArrowBackIosRounded, ArrowCircleDown, ArrowForwardIosRounded } from '@mui/icons-material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const PlayLisId = () => {
  const router = useRouter();

  return (
    <div>
        <div>
      <div className="w-full rounded-tr-md flex items-center sticky top-0 px-5 py-2 z-10 dark:bg-transparent">
      <div className="w-6/12 flex items-center">
        <div className="w-3/12 flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-full dark:bg-neutral-950 dark:bg-opacity-75 hover:dark:bg-neutral-800"  onClick={()=>{router.back()}}>
            <ArrowBackIosRounded className="text-lg" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full dark:bg-neutral-950 dark:bg-opacity-40 hover:dark:bg-neutral-800" onClick={()=>{router.forward()}} >
            <ArrowForwardIosRounded className="text-lg" />
          </button>
        </div> 
      </div>
        <div className="w-6/12 flex items-center justify-end gap-2">
          <div className="p-1 ml-2 rounded-2xl dark:bg-neutral-50 cursor-pointer">
          <span className="font-semibold text-xs text-neutral-900 p-1 rounded-2xl ">
            Explore premium
          </span>
        </div>
        <div className="p-1 rounded-2xl dark:bg-neutral-900 dark:bg-opacity-80 cursor-pointer hover:dark:bg-neutral-800">
          <span className="font-semibold text-xs text-neutral-50 p-1 whitespace-nowrap">
            <ArrowCircleDown /> Install app
          </span>
        </div>
        <div className="h-8 w-8">
          <Link href="/" className="no-underline">
            <Image
              src="/crow.jpg"
              alt="userProfile"
              width={250}
              height={250}
              className="w-full h-full rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
      </div>
      </div>
  )
}

export default PlayLisId