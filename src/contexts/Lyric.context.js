import React, { createContext, useState} from 'react';

export const LyricContext = createContext();

export function LyricProvider(props){

    const [lyrics, setLyrics] = useState({});
    
    function updateLyric(newLyric){
        setLyrics((lyrics) => {
            return newLyric;
        })
    }

    return(
        <LyricContext.Provider value={{lyrics, updateLyric}}>
            {props.children}
        </LyricContext.Provider>
    )
}