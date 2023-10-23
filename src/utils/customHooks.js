import Vibrant from "node-vibrant";
// import Image from "next/image";

import { useEffect, useState } from "react";


export function useDarkMutedColor(imageUrl) {
    const [dominantColor, setDominantColor] = useState(null)
    useEffect(() => {
        let vibrant = new Vibrant(imageUrl)
        vibrant.getPalette().then((palette) => {
               
                console.log(palette.Vibrant.getHex())
                setDominantColor(`${palette.Vibrant.getHex()}`)
            }).catch((error)=>{
                console.log(error);
            })
    },[imageUrl])
   

    return dominantColor
}

export function useVibrantColor(imageUrl) {
    const [dominantColor, setDominantColor] = useState(null)
    useEffect(() => {
    let vibrant = new Vibrant(imageUrl)
    vibrant.getPalette().then((palette) => {
            console.log(palette.Vibrant.getHex())
            setDominantColor(`${palette.Vibrant.getHex()}`)
        }).catch((error)=>{
            console.log(error);
        })
    },[imageUrl])

    return dominantColor
}