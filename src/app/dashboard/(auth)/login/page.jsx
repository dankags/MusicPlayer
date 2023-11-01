"use client"
import { Apple, FacebookRounded, Google } from '@mui/icons-material'
import Link from 'next/link'
import './login.globals.css'
import React from 'react'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Login = () => {

  const { data, status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    router.push("/")
  }
  
  console.log(data,status);

  const handleLogin = async(e) => {
    e.preventDefault();
  }
  return (
    <div className=' w-full col-span-12 flex flex-col items-center overflow-y-scroll dark:bg-gradient-to-t from-neutral-950 to-neutral-900 gap-9 scrollbar scrollbar-track-transparent scrollbar-thumb-neutral-500'>
      <div className='w-full py-8 pl-10 gap-3 flex items-center justify-start dark:bg-neutral-950'>
        <Image src='/1cfa810c59bd2aa3ce06d4e7ccc3a7e8.jpg' alt='' height={45} width={45} className='object-cover'/>
        <span className=' font-semibold text-2xl dark:text-neutral-50'>Spotify</span>
      </div>
      <div className='w-7/12 rounded-xl flex flex-col items-center py-14 dark:bg-neutral-950 '>
      <h1 className='font-bold text-4xl py-4'>log in to Spotify</h1>
      <div className='w-7/12 py-4 flex flex-col items-center gap-4'>
       <div  className="w-8/12 ring-2 flex justify-start items-center ring-stone-400 rounded-3xl px-6 py-3 font-medium text-sm dark:text-stone-300 hover:dark:bg-neutral-800 cursor-pointer" onClick={()=>signIn("google")}><Google className='mr-5 '/> Continue with Google</div>
       <Link  href="" className="w-8/12 ring-2 flex justify-start items-center ring-stone-400 rounded-3xl  px-6 py-3 font-medium text-sm dark:text-stone-300 hover:dark:bg-neutral-800"><FacebookRounded className='mr-5 text-blue-500'/> Continue with Facebook</Link>
       <Link  href="" className="w-8/12 ring-2 flex justify-start items-center ring-stone-400 rounded-3xl  px-6 py-3 font-medium text-sm dark:text-stone-300 hover:dark:bg-neutral-800"><Apple className='mr-5 dark:text-white'/> Continue with Apple</Link>
       <Link href="" className="w-8/12 ring-2 flex justify-center items-center ring-stone-400 rounded-3xl  px-4 py-3 font-medium text-sm dark:text-stone-300 hover:dark:bg-neutral-800"> Continue with phone number</Link>
        </div>
      <div className='my-7 w-7/12'>
      <hr className='dark:border-neutral-700' />
      </div>
      <form onSubmit={handleLogin} className='w-7/12 flex flex-col items-center gap-4'>
        <div className='w-8/12 flex flex-col gap-2'>
          <label htmlFor="Email" className='text-sm font-medium'>Email or Username</label>
        <input type="email" name="" id="Email" className='h-10 rounded-sm px-2 text-sm text-black font-medium focus:dark:outline-green-600' />
        </div>
        <div className='w-8/12 flex flex-col gap-2'>
          <label htmlFor="Password" className='text-sm font-medium'>Password</label>
        <input type="password" name="" id="password" className='h-10 rounded-sm px-2 text-sm text-black font-medium focus:dark:outline-green-600' />
          </div>
          <div className='w-8/12 flex items-center justify-start mb-4'>
            <input type="checkbox" name="" id="" className='checkBox' />
            <span className='text-xs font-normal ml-2'>Remember me</span>
          </div>
        <button className='w-8/12 py-3 rounded-3xl text-sm font-bold dark:text-neutral-900 dark:bg-green-500 hover:dark:bg-green-400'>Log in</button>
        <Link href="" className='text-sm font-normal dark:text-white hover:underline'>Forgot Your Password?</Link>
        <div className='w-full'>
          <hr className='dark:border-neutral-700 mt-5 mb-9'/>
        </div>
        <p className='text-sm font-medium dark:text-stone-400'>Do not have an account? <Link href="/dashboard/register" className='dark:text-white hover:underline'>Sign up for Spotify</Link></p>
      </form>
      </div>
    </div>

  )
}

export default Login