import React, {useContext, useEffect, useState} from 'react';
import Track from './Track';
import {SearchTrackContext} from '../contexts/SearchTrack.context';
import Loader from './Loader';
import axios from 'axios';



export default function SearchTrackList(props) {
    let {tracks, updateSearch} = useContext(SearchTrackContext);
    const words = tracks.words;
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const MM_API = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${words}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`;
            axios.get(MM_API)
            .then((res) => {
                const data = res.data.message.body.track_list;
                updateSearch(data);
                setLoader((loader) => true);
                tracks = data;
            })
            .catch(err => console.log(err));
    }, []);

    if(loader) return(
            <div className="track-list">
            <div className="track-list--head"><h2>Results</h2></div>
            <div className="track-list--list">

                {tracks.map((track, i) => {
                    return <Track track={track.track} key={i} idx={i}/>
                })}
            </div>
        </div>
        )
    else{
        return(<Loader/>)
    }
}
