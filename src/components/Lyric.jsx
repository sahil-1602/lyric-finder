import React, { useContext, useEffect, useState} from 'react';
import {LyricContext} from '../contexts/Lyric.context';
import '../sass/_component.scss';
import axios from 'axios';
import Loader from './Loader';


export default function Lyric(props) {
    const { lyrics, updateLyric } = useContext(LyricContext);
    const [loader, setLoader] = useState(true);
    let song = lyrics;

    useEffect(() => {
        const MM_LYRIC_API = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${song.track_id}&apikey=${process.env.REACT_APP_MM_KEY}`;
        axios.get(MM_LYRIC_API)
        .then((res) => {
            const lyric = res.data.message.body.lyrics;
            const track = {
                song: song.track_name,
            }
            const lyricsWithTrackName = [lyric, track];
            updateLyric(lyricsWithTrackName);
            setLoader((loader) => false);
        })
        .catch(err => console.log(err));
    }, [])
    
    if(loader) return(<Loader/>);
    else {
        return(
            <div className="lyric-container">
            <div className="lyric-container--name">
                <h2>{lyrics[1].song}</h2>
                <h2>{lyrics[0].explicit == 1 ? "Explicit" : ""}</h2>
            </div>
            <h1>{lyrics[0].lyrics_body}</h1>
        </div>
        )
    }
}

// useEffect(() => {
//         const MM_LYRIC_API = `https://api.lyrics.ovh/v1/${song.artist_name}/${song.track_name}`;
//         console.log(MM_LYRIC_API);
//         axios.get(MM_LYRIC_API)
//         .then((res) => {
//             console.log(res.data);
//             const lyric = res.data.lyrics;
//             const track = {
//                 song: song.track_name,
//             }
//             const lyricsWithTrackName = [lyric, track];
//             updateLyric(lyricsWithTrackName);
//             setLoader((loader) => false);
//         })
//         .catch(err => console.log(err));
//     }, [])