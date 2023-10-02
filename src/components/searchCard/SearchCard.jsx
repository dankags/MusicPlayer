import Image from 'next/image'
import React from 'react'
import "./SearchCard.globals.css"

const SearchCard = () => {
  return (
    <div className='relative rounded-lg h-48 w-48 overflow-hidden p-3 text-white bg-orange-600 cursor-pointer'>
          <span className='font-semibold text-lg'>Podcasts</span>   
          <div className='h-28 w-28 relative top-12 left-24'>
              <Image src="/billboard.jpg" alt="" fill={true} className='imageRotation'/>
          </div>
    </div>
  )
}

export default SearchCard