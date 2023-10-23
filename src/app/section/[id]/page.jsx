"use client"
import ArtistCard from '@/components/artistCard/ArtistCard'
import { Footer } from '@/components/footer/Footer'
import { NavBar } from '@/components/navbar/NavBar'
import { UiContext } from '@/providers/UiContext/MainUi'
import React, { useContext } from 'react'

const Section = () => {
  const {center}=useContext(UiContext)
  return (
    <div className={`${center ?center:'col-span-8'} h-full dark:bg-neutral-900 rounded-lg overflow-y-scroll scrollbar scrollbar-thumb-neutral-800`}>
      <NavBar/>
      <div className='mt-4'>
      <span className='pl-5 text-xl font-semibold '>Suggested artists</span>
      </div>
      <div className='px-5 mt-4 flex flex-wrap gap-5'>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        <ArtistCard />
        <ArtistCard/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Section