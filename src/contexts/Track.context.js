import React, { createContext, useState, useEffect} from 'react';
import useToggleState from '../hooks/useToggleState';
import axios from 'axios';


export const TrackContext = createContext();

export function TrackProvider(props){

    const [tracks, setTracks] = useState([]);
    const [loader, toggleLoader] = useToggleState(true);

    useEffect(() => {
        const MM_API = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`;

        axios.get(MM_API)
        .then((res) => {
            setTracks((tracks) => {
                const data = res.data.message.body.track_list;
                return data;
            });
            toggleLoader();
        })
        .catch(err => console.log(err));
        
    }, []);

    
    return(
        <TrackContext.Provider value={{tracks:tracks, loader:loader}}>
            {props.children}
        </TrackContext.Provider>
    )
}