import React, {useContext, useEffect} from 'react';
import {SearchTrackContext} from '../contexts/SearchTrack.context';
import useToggleState from '../hooks/useToggleState';
import Loader from './Loader';
import Track from './Track';
import axios from 'axios';


export default function SearchTrackList(props) {

    let {tracks, updateSearch} = useContext(SearchTrackContext);
    let words = window.location.pathname;
    words = words.substr(8, words.length);
    const [loader, setLoader] = useToggleState(false);

    useEffect(() => {
        const MM_API = `http://api.musixmatch.com/ws/1.1/track.search?q=${words}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`;
            axios.get(MM_API)
            .then((res) => {
                const data = res.data.message.body.track_list;
                updateSearch(data);
                setLoader((loader) => true);
                tracks = data;
            })
            .catch(err => console.log(err));
    }, []);

    if(loader){ 

        return(
            <div className="track-list">
                <div className="track-list--head"><h2>Results for '{words}'</h2></div>
                <div className="track-list--list">

                    {tracks.map((track, i) => {
                        return <Track track={track.track} key={i} idx={i}/>
                    })}
                </div>
            </div>
        )
    }

    else{
        return(<Loader/>)
    }
}
