import Vibrant from "node-vibrant";
// import Image from "next/image";

import { useEffect, useState } from "react";


export function useDarkMutedColor(imageUrl) {
    const [dominantColor, setDominantColor] = useState(null)
    useEffect(() => {
        let vibrant = new Vibrant(imageUrl)
        vibrant.getPalette().then((palette) => {
                setDominantColor(`${palette.DarkMuted.getHex()}`)
            }).catch((error)=>{
                console.log(error);
            })
    },[imageUrl])
   

    return dominantColor
}

export function useLightMutedColor(imageUrl) {
    const [dominantColor, setDominantColor] = useState(null)
    useEffect(() => {
    let vibrant = new Vibrant(imageUrl)
    vibrant.getPalette().then((palette) => {
            setDominantColor(`${palette.LightMuted.getHex()}`)
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
            setDominantColor(`${palette.Vibrant.getHex()}`)
        }).catch((error)=>{
            console.log(error);
        })
    },[imageUrl])

    return dominantColor
}

export function useDarkVibrantColor(imageUrl) {
    const [dominantColor, setDominantColor] = useState(null)
    useEffect(() => {
    let vibrant = new Vibrant(imageUrl)
    vibrant.getPalette().then((palette) => {
            setDominantColor(`${palette.DarkVibrant.getHex()}`)
        }).catch((error)=>{
            console.log(error);
        })
    },[imageUrl])

    return dominantColor
}

export function useLightVibrantColor(imageUrl) {
    const [dominantColor, setDominantColor] = useState(null)
    useEffect(() => {
    let vibrant = new Vibrant(imageUrl)
    vibrant.getPalette().then((palette) => {
            setDominantColor(`${palette.LightVibrant.getHex()}`)
        }).catch((error)=>{
            console.log(error);
        })
    },[imageUrl])

    return dominantColor
}

