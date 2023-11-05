"use client"
import ArtistCard from '@/components/artistCard/ArtistCard';
import { Footer } from '@/components/footer/Footer';
import { LikedList } from '@/components/likedList/LikedList';
import { NavBar } from '@/components/navbar/NavBar';
import { useUiContext } from '@/providers/UiContext/MainUi'
import { useDarkVibrantColor, useVibrantColor } from '@/utils/hooks/colorHooks';
import { Close, Edit, EditOutlined, MoreHoriz } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React, { Children, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge';

export default function User({ params }) {
    console.log(params);
    const { center } = useUiContext()
    const pageRef = useRef();
    const [navBarColor,setNavbarColor]=useState("rgba(23,23,23,0.3)")
    const [pageWidth, setPageWidth] = useState(null)
    const [showUploadForm, setShowuploadForm] = useState(false)
    const [file,setFile]=useState(null)
    const [imageUrl,setImageUrl]=useState(null)
    const darkVibrant=useDarkVibrantColor(imageUrl?imageUrl:"/crow.jpg")
    
    useEffect(() => {
        const pageCurrentWidth = pageRef.current.clientWidth;
        setPageWidth(pageCurrentWidth);
    }, [center]);
    useEffect(() => {
        
    },[imageUrl])
    
    const handleScroll = (e) => {
        if (e.target.scrollTop > 251) {
            setNavbarColor(`${darkVibrant}`)
            return
       }
       setNavbarColor("rgba(23,23,23,0.3)")
   }
    const handleFileChange = (e) => {
        const choosenFile = e.target.files[0]
        setFile(choosenFile)
        const url = URL.createObjectURL(choosenFile)
        setImageUrl(url)
        
    }
    const submitprofileChanges = (e) => {
        e.preventDefault()
    }

    return (
      <>
            <div className='absolute top-0 left-0 h-screen w-screen bg-neutral-950/75  z-50  items-center justify-center' style={showUploadForm?{display:"flex"}:{display:"none"}}>
                <div className='w-5/12 p-3 rounded-md bg-neutral-800 '>
                    <div className='pb-4 flex justify-between items-center '>
                        <span className='text-2xl font-bold text-neutral-50'>Profile details</span>
                       <button onClick={()=>setShowuploadForm(!showUploadForm)} className='h-9 w-9 text-center rounded-full text-neutral-400 hover:text-neutral-50 hover:bg-neutral-700'><Close/></button> 
                    </div>
                    <form onSubmit={submitprofileChanges} className='flex items-center'>
                        <div className='w-4/12 flex items-center justify-center '>
                            <label htmlFor="image" className='group relative h-44 w-44 cursor-pointer'>
                                <div className='h-full w-full relative'>
                                    <Image src={imageUrl?imageUrl:"/crow.jpg"} alt={"profile"} fill className='shadow-xl shadow-neutral-900 object-cover rounded-full' />
                                </div>
                                <div className='w-full h-full absolute top-0 left-0 rounded-full flex flex-col justify-center items-center gap-2 opacity-0 text-neutral-50 group-hover:bg-neutral-900/75 group-hover:opacity-100'>
                                   <Edit className='text-4xl'/> 
                                   <span className='text-base font-semibold '>Choose photo</span>
                                </div>
                                <input onChange={handleFileChange} type="file" name="" id="image" className='hidden' accept="image/*" />
                            </label>
                        </div>
                        <div className='w-8/12 pl-3 flex flex-col justify-center gap-3'>
                            <input type="text" placeholder='Danielkagombe' name="" id="" className='px-3 py-3 text-base font-medium rounded-md bg-neutral-700  placeholder:text-stone-200  focus:outline-neutral-50 ' />
                            <div className='w-full flex items-center justify-end'>
                            <button type="submit" className='w-3/12 py-2 px-3 text-base font-bold rounded-3xl bg-neutral-50 text-neutral-900  hover:scale-105'>Save</button>
                            </div>
                        </div>
                    </form>
                    <div className='pt-4 '>
                      <p className='text-xs font-semibold'>By proceeding, you agree to give Spotify access to the image you choose to upload. Please make sure you have the right to upload the image.</p>
                    </div>
                </div>
            </div>
            {/* main page after that */}
      <div ref={pageRef} className={`h-full pt-2  ${center ?center:'col-span-8'}`}>
          <main onScroll={handleScroll} className={`h-full relative overflow-y-scroll rounded-md scrollbar-thin scrollbar-track-neutral-900 scrollbar-thumb-neutral-800  bg-transparent/30`} style={{backgroundColor:`${ useVibrantColor(`${imageUrl?imageUrl:"/crow.jpg"}`) }`}} >
            <div className='sticky top-0 z-10 ' style={{backgroundColor:`${navBarColor}`}}>
                  <NavBar />
            </div>      
              <section className={`h-60 w-full flex pl-4 pb-4 relative items-end bg-neutral-900/30 ${
              pageWidth <= 642 ? "pt-0" : ""
            }`}>
             
            <div
              className={`pb-1 flex justify-start ${pageWidth <= 642 ? "w-4/12" : "w-3/12  "}  `}
                  >
              <div onClick={()=>setShowuploadForm(!showUploadForm)} className={`group relative ${pageWidth <= 642 ? "h-48 w-48" : "h-56 w-56"} cursor-pointer `}>       
              <Image
                src={imageUrl?imageUrl:"/crow.jpg" }
                alt="likedImage"
                fill
                className="object-cover shadow-2xl shadow-neutral-950 rounded-full"
                                />
                <div className='w-full h-full absolute top-0 left-0 rounded-full flex flex-col justify-center items-center gap-2 opacity-0 text-neutral-50 group-hover:bg-neutral-900/75 group-hover:opacity-100'>
                  <EditOutlined className='text-6xl'/> 
                   <span className='text-lg font-semibold '>Choose photo</span>            
                </div>                
              </div> 
            </div>
            <div
              className={`pb-1 ${
                pageWidth <= 642 ? "pl-4 w-8/12" : "w-9/12 pl-3"
              }`}
            >
              <section>
                <div className={`${
                      pageWidth <= 642 ? "" : "pb-2"
                    }`}>
                  <span className="font-medium text-neutral-50 ">Profile</span>
                </div>
                <div>
                  <span
                    className={`w-full cursor-pointer ${
                      pageWidth <= 642 ? "text-4xl font-bold" : "text-7xl font-extrabold"
                    } text-neutral-50  truncate`}
                    onClick={()=>setShowuploadForm(!showUploadForm)}
                  >
                   Danielkagombe 
                  </span>
                </div>
                <div className={`flex items-center ${
                      pageWidth <= 642 ? "pt-3" : "pt-7"
                    }`}>
                  
                  <span className="mr-2 text-sm text-neutral-50 font-semibold ">
                    2 Public Playlist .
                  </span>
                  <span className="text-sm text-neutral-50 font-medium">
                    5 Following
                  </span>
                </div>
              </section>
            </div>
              </section>

              <section className='px-3 bg-gradient-to-b from-transparent/30 via-20% via-neutral-950/95 to-neutral-900 '>
              <div className=" py-3 relative ">
              <button
                className="w-14 h-14 flex items-center sticky top-16 justify-center rounded-full text-neutral-400 hover:text-neutral-50 cursor-pointer"
                role="play button"
              >
                <MoreHoriz className={`${pageWidth<=642 ? "text-4xl": "text-5xl"}`} />
              </button>
                  </div>
                  <UserSliderHandler grid title={"Top artists this month"} visibleItemCount={pageWidth <= 642 ? 3 : 4 } pageWidth={pageWidth}>
                      <ArtistCard />
                      <ArtistCard/>
                      <ArtistCard/>
                      <ArtistCard/>
                      <ArtistCard/>
                      <ArtistCard/>
                      <ArtistCard/>
              </UserSliderHandler>
               <div className="mt-10">
              <UserSliderHandler title={"Top tracks this month"} visibleItemCount={pageWidth <= 642 ? 3 : 4 } pageWidth={pageWidth}>
                      <LikedList />
                      <LikedList/>
                      <LikedList/>
                      <LikedList/>
                      <LikedList/>
                      <LikedList/>
                      <LikedList/>
              </UserSliderHandler>
             </div>
            </section>
            <Footer/>
          </main>
            </div>
            </>
  )
}

const UserSliderHandler = ({
    grid,
    children,
    pageWidth,
    title,
    otherClassNames,
    visibleItemCount = Number.POSITIVE_INFINITY,
  }) => {
    const childrenArray = Children.toArray(children).flat();
    const visibleChildren = childrenArray.slice(0, visibleItemCount);
    children = visibleChildren;
    return (
      <div
        className={``}
        >
        <div className='w-full flex items-center pb-4 '>
                <div className='w-8/12 flex flex-col gap-1'>
                    <Link href="" className='font-bold text-2xl text-stone-100  hover:underline'>{title}</Link>
                    <span className='font-medium text-base text-neutral-500 '>Only visible to you</span>
                </div>
                {childrenArray.length > 4 &&
                    <div className='w-4/12 flex items-center justify-end'>
                       <Link href="" className='font-bold text-sm text-stone-500 hover:underline hover:text-stone-100'>Show all</Link> 
                 </div>
                }
        </div>   
            
         <div className={grid?`grid gap-2 grid-col-4 grid-flow-col`:`${otherClassNames}`}>   
           {children}
        </div>
      </div>
    );
};
  
// const UploadForm = ({showUploadForm,setShowuploadForm}) => {
    
//     return (
        
//     )
// }
