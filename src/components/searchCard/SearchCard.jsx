import Image from 'next/image'
import React, { useEffect } from 'react'
import "./SearchCard.globals.css"
import { useRouter } from 'next/navigation'

const SearchCard = ({ category, pageCurrentWidth }) => {
 

  return (
    <div className={`max-h-48 max-w-[208px] relative rounded-lg  overflow-hidden p-3 text-white cursor-pointer ${pageCurrentWidth<= 642 ? "h-40 w-42 ":"max-md:h-32 max-md:w-36 max-lg:h-40 max-lg:w-42 lg:h-48 lg:w-52"}   `} style={category?{backgroundColor:`${category.backgroundColor}`}:{backgroundColor:"rgb(255,255,255,0.6)"}}>
      <span className='font-bold max-sm:text-base max-md:text-lg md:text-xl'>{ category.category}</span>   
      <div className={`max-h-28 max-w-[112px] relative   ${pageCurrentWidth <=642 ? "h-20 w-20 left-24 top-12" : "max-h-28 max-w-[112px] left-28 top-14 max-md:h-20 max-md:w-20 max-md:left-24 max-md:top-12 md:h-48 md:w-52"} ` }>
              <Image src={category. backgroundImg} alt="" fill={true} className='imageRotation'/>
          </div>
    </div>
  )
}

export default SearchCard