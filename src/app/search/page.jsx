"use client"
import { Footer } from '@/components/footer/Footer';
import SearchCard from '@/components/searchCard/SearchCard';
import { ArrowBackIosRounded, ArrowCircleDown, ArrowForwardIosRounded, SearchRounded } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import React from 'react'
import "./search.globals.css"

const Search = () => {
  const router = useRouter();
  

  return (
    <div className='col-span-5 w-full h-full rounded-md relative overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-700 bg-neutral-900'>
      <div className="w-full rounded-tr-md flex items-center sticky top-0 px-5 py-2 z-10 dark:bg-neutral-900">
      <div className="w-7/12 flex items-center">
        <div className="w-3/12 flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-full dark:bg-neutral-950 dark:bg-opacity-75 hover:dark:bg-neutral-800"  onClick={()=>{router.back()}}>
            <ArrowBackIosRounded className="text-lg" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full dark:bg-neutral-950 dark:bg-opacity-40 hover:dark:bg-neutral-800" onClick={()=>{router.forward()}} >
            <ArrowForwardIosRounded className="text-lg" />
          </button>
        </div>
          <div className="pl-2 w-9/12 flex items-center bg-transparent justify-between gap-1 p-2 ring-2 dark:ring-white rounded-3xl focus-within:bg-neutral-50/40 searchContainer">
            <SearchRounded className='w-1/12'/>
          <input type="search" name="" id=""  placeholder='What do you want to listen to?' className='w-11/12 text-xs font-semibold text-white bg-transparent  searchInput'/>
        </div>
      </div>
      <div className="w-5/12 flex items-center justify-end gap-2 ">
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
      <div className='flex flex-col gap-3 pt-3 pl-5'>
        <div className=''>
          <span className='text-lg font-bold'>Browse all</span>
        </div>
        <div className='flex flex-wrap gap-5'>
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard/>
        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default Search