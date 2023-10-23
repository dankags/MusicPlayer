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
    currentSong: null,
    setCurrentSong: setCurrent,
    setLike:setLike
  });

  return (
    <CurrentMusic.Provider value={state}>{children}</CurrentMusic.Provider>
  );
};

export const useCurrentMusicContext = () => {
  return CurrentMusic
}