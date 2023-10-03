"use client";
import {
  ArrowBackIosRounded,
  ArrowCircleDown,
  ArrowForwardIosRounded,
  Pause,
  PlayArrow,
} from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export const NavBar = () => {
  const [play, setPlay] = useState(false);
  const [menuState,setMenuState] = useState(false)
  const router = useRouter();
  const {data, status } = useSession();
  console.log(data,status);
  if (status === 'unauthenticated') {
    router.push("dashboard/login")
  }

  const handlePause = () => {
    play ? setPlay(!play) : setPlay(!play);
  };

  const handleScroll = () => {

  };

  const handleDropDownMenu = () => {
    menuState ? setMenuState(!menuState): setMenuState(!menuState)
   console.log(menuState);
  }
  return (
    <div className="w-full rounded-tr-md flex items-center sticky top-0 px-5 py-2 z-10 dark:bg-transparent">
      <div className="w-6/12 flex items-center">
        <div className="w-3/12 flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full dark:bg-neutral-950 dark:bg-opacity-75 hover:dark:bg-neutral-800"  onClick={()=>{router.back()}}>
            <ArrowBackIosRounded className="text-lg" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full dark:bg-neutral-950 dark:bg-opacity-40 hover:dark:bg-neutral-800" onClick={()=>{router.forward()}} >
            <ArrowForwardIosRounded className="text-lg" />
          </button>
        </div>
        <div className="pl-2 w-9/12 flex items-center">
          <button
            className="w-12 h-12 first-letter: rounded-full dark:bg-green-500 hover:dark:bg-green-400 cursor-pointer"
            onClick={handlePause}
          >
            {play ? (
              <PlayArrow className="text-neutral-900 text-3xl" />
            ) : (
              <Pause className="text-neutral-900 text-3xl" />
            )}
          </button>
          <span className="pl-2 text-2xl font-semibold">Liked Songs</span>
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
          <span onClick={handleDropDownMenu} className="no-underline cursor-pointer">
            <Image
              src={data?.user.image}
              alt="userProfile"
              width={250}
              height={250}
              title={data?.user.name}
              className="w-full h-full rounded-full object-cover"
            />
          </span>
        </div>
      </div>
      {
       menuState ?
      <div className="w-32 absolute right-3 top-14 bg-neutral-800 text-base flex flex-col items-center rounded-md " >
            <span  className='w-full rounded-t-md py-2 text-center cursor-pointer text-sm font-semibold hover:bg-neutral-700/75'>Account</span>
            <span  className='w-full py-2 text-center cursor-pointer text-sm font-semibold hover:bg-neutral-700/75'>Playlist</span>
            <span className='w-full py-2 text-center cursor-pointer text-sm font-semibold hover:bg-neutral-700/75'>PlayList</span>
            <hr className='w-10/12 dark:border-neutral-700 my-2' />
            <span onClick={() => signOut()} className='w-full py-2 rounded-b-md text-center cursor-pointer text-sm font-semibold hover:bg-neutral-700/75'>LogOut</span>
          </div>
          :
        <div></div>  
      }
    </div>
  );
};
