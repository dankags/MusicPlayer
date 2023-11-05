"use client"

import { useContext } from "react";

const { createContext, useState } = require("react");

 const CurrentMusic = createContext({
  currentSong: null,
  setCurrentSong: () => { },
  setLike:()=>{}
});

export const CurrentMusicProvider = ({ children }) => {
  const setCurrent = (currentMusc) => {
    setState({ currentSong: currentMusc });
    };
    const setLike = () => {
        setState({
            currentSong: {
                ...state.currentSong,
                like:!currentSong.like
            }
        })
        
    }
  const [state, setState] = useState({
    currentSong: {
      id: "3c3cd3a6-e459-434a-b649-ec0f661cfd80",
      musicName: "spectre",
      categoryName: "housemusic",
      artistIds: "a3f5954c-8702-4766-adde-e952af96306c",
      viewsNumber: "0",
      musicImage: "http://res.cloudinary.com/dxqbb56ul/image/upload/v1698911134/my-uploads/mxmdkbb7ghyoz0bqlbxv.png",
      audioUrl: "https://firebasestorage.googleapis.com/v0/b/spotifyclone-d7d1f.appspot.com/o/Alan%20Walker%20_The%20Spectre%20(Lyrics%20_%20Lyrics%20Video)%20(1).mp3?alt=media&token=a22a55dc-4100-430b-9ea4-109f1d950909",
      duration: "205.061",
      uploaded:  "2023-11-02T07:45:52.027+00:00"  
    },
    setCurrentSong: setCurrent,
    setLike:setLike
  });

  return (
    <CurrentMusic.Provider value={state}>{children}</CurrentMusic.Provider>
  );
};

export const useCurrentMusicContext = () => {
  const music = useContext(CurrentMusic)
  //  if (music) {
  //    throw new Error("the context cannot be used here ")
  // }
  return music
}