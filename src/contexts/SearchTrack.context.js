import React, { createContext, useState} from 'react';

export const SearchTrackContext = createContext();

export function SearchTrackProvider(props){
    const [tracks, setTracks] = useState({});

    function updateSearch(newTracks) {
        setTracks((tracks) => {
            return newTracks;
        });
    }

    return(
        <SearchTrackContext.Provider value={{tracks, updateSearch}}>
            {props.children}
        </SearchTrackContext.Provider>
    )
}