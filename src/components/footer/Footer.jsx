"use client"
import { FacebookRounded, PlayArrow, Twitter, WhatsApp } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='py-12 dark:bg-neutral-900 px-6'>
      <div className='w-full flex items-start'>
        <div className='w-3/12 flex flex-col gap-2'>
          <span className='text-sm font-bold'>Company</span>
          <Link href='' className='text-sm font-medium dark:text-stone-400 no-underline hover:dark:text-stone-50'>About</Link>
          <Link href='' className='text-sm font-medium dark:text-stone-400 no-underline hover:dark:text-stone-50'>Jobs</Link>
          <Link href='' className='text-sm font-medium dark:text-stone-400 no-underline hover:dark:text-stone-50'>For The Record</Link>
        </div>
        <div className='w-3/12 flex flex-col gap-2'>
          <span className='text-sm font-bold'>Communities</span>
          <Link href='' className='text-sm font-medium dark:text-stone-400 no-underline hover:dark:text-stone-50'>For Artist</Link>
          <Link href='' className='text-sm font-medium dark:text-stone-400 no-underline hover:dark:text-stone-50'>Developers</Link>
          <Link href='' className='text-sm font-medium dark:text-stone-400 no-underline hover:dark:text-stone-50'>Advertising</Link>
          <Link href='' className='text-sm font-medium dark:text-stone-400 no-underline hover:dark:text-stone-50'>Investors</Link>
          <Link href='' className='text-sm font-medium dark:text-stone-400 no-underline hover:dark:text-stone-50'>Vendors</Link>
        </div>
        <div className='w-6/12 flex justify-end gap-3'>
          <button className='p-2 rounded-full text-neutral-50 dark:bg-neutral-800 hover:bg-neutral-700 cursor-pointer'>
            <WhatsApp/>
          </button>
          <button className='p-2 rounded-full text-neutral-50 dark:bg-neutral-800 hover:bg-neutral-700 cursor-pointer'>
             <Twitter/>
          </button>
          <button className='p-2 rounded-full text-neutral-50 dark:bg-neutral-800 hover:bg-neutral-700 cursor-pointer'>
          <FacebookRounded/>
          </button>
        </div>
      </div>
      <div>
        <div className='flex flex-col mt-6 gap-2'>
          <span className='text-sm font-bold'>Useful links</span>
          <Link href='' className='text-sm font-medium dark:text-stone-400 no-underline hover:dark:text-stone-50'>Support</Link>
          <Link href='' className='text-sm font-medium dark:text-stone-400 no-underline hover:dark:text-stone-50'>Free Mobile App</Link>
        </div>
       <hr className='dark:border-neutral-600 my-6'/>
        <div className='flex items-center'>
          <div className='w-9/12'>
            <Link href='' className='text-xs mr-2 font-normal dark:text-stone-400 no-underline hover:dark:text-stone-50'>Legacy</Link>
            <Link href='' className='text-xs mr-2 font-normal dark:text-stone-400 no-underline hover:dark:text-stone-50'>Privacy Center</Link>
            <Link href='' className='text-xs mr-2 font-normal dark:text-stone-400 no-underline hover:dark:text-stone-50'>Privacy Policy</Link>
            <Link href='' className='text-xs mr-2 font-normal dark:text-stone-400 no-underline hover:dark:text-stone-50'>Cookies</Link>
            <Link href='' className='text-xs mr-2 font-normal dark:text-stone-400 no-underline hover:dark:text-stone-50'>About Ads</Link>
            <Link href='' className='text-xs font-normal dark:text-stone-400 no-underline hover:dark:text-stone-50'>Accessibility</Link>
          </div>
          <span className='w-3/12 text-end text-sm dark:text-stone-400'>@ 2023 Spotify AB</span>
       </div>
      </div>
      
    </div>
  )
}
