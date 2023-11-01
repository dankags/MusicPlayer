"use client"
const { createContext, useState, useContext } = require("react");

export const UrlContext = createContext({
    newUrls: [],
    prevUrls:[],
    newUrlsPointer: null,
    prevUrlsPointer: null,
    getPreviousUrl: () => { },
    getNextUrl: () => { },
    setNewUrl:()=>{}
})


export const UrlProvider = ({ children }) => {
    const setNewUrl = (url) => {
        if (state.prevUrls.length !== 0) { 
            setState({
                ...state,
                newUrls: state.prevUrls.forEach((item) => state.newUrls.push(item)),
                prevUrlsPointer: state.prevUrls.length,
                newUrlsPointer:state.newUrlsPointer.length
            })
        }
        if (!state.newUrls.includes(url)) {
            setState({
                ...state,
                newUrls: state.newUrls.push(url),
                newUrlsPointer: state.newUrls.length
            })
        } else {
            const repetedUrl = state.newUrls.filter((item)=>item!==url)
            setState({
                newUrls:state.newUrls.filter((item)=>item===repetedUrl),
                newUrls:state.newUrls.push(repetedUrl)
            })
        }
    
    }

    const setNextUrl = () => {
        if (state.prevUrls.length===0) {
          return  
        }
        const topPrevUrl = state.prevUrls.pop()
        setState({
            ...state,
            newUrls: state.newUrls.push(topPrevUrl),
            prevUrls: state.prevUrls.filter((item)=>item===topPrevUrl),
            newUrlsPointer: state.newUrls.length,
            prevUrlsPointer:state.prevUrls.length
        })
        return topPrevUrl
    }

    const setPreviousUrl = () => {
        if (state.newUrls.length===0) {
            return  
          }
          const topPrevUrl = state.newUrls.pop()
          setState({
              ...state,
              newUrls: state.newUrls.filter((item)=>item===topPrevUrl),
              prevUrls: state.prevUrls.push(topPrevUrl),
              newUrlsPointer: state.newUrls.length,
              prevUrlsPointer:state.prevUrls.length
          })
          return topPrevUrl
    }
    
    const [state, setState] = useState({
        newUrls: [],
        prevUrls:[],
        newUrlsPointer: 0,
        prevUrlsPointer: 0,
        getPreviousUrl: setPreviousUrl,
        getNextUrl: setNextUrl,
        setNewUrl: setNewUrl
    })
    return (
        <UrlContext.Provider value={ state}>
            {children}
        </UrlContext.Provider>
    )
}

export const useUrlContext = () => {
    return useContext(UrlContext)
}