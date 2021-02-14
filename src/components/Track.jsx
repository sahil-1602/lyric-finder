import React, { useContext  } from 'react';
import '../sass/_component.scss';
import axios from 'axios';
import {useHistory } from 'react-router-dom';
import {LyricContext} from '../contexts/Lyric.context';

export default function Track(props) {
    const history = useHistory();
    const {lyrics, updateLyric} = useContext(LyricContext);
    let song = props.track
    const handleClick = () => {
        const MM_LYRIC_API = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${song.track_id}&apikey=${process.env.REACT_APP_MM_KEY}`;
        axios.get(MM_LYRIC_API)
        .then((res) => {
            const lyric = res.data.message.body.lyrics;
            updateLyric(lyric);
            history.push('/lyrics');
        })
        .catch(err => console.log(err));
    };
    return (
        <div className="card">
            <div className="card--song"><p>{song.artist_name}</p></div>
            <div className="card--part2">
                <div className="card--track"><p>Track : {song.track_name}</p></div>
                <div className="card--album"><p>Album: {song.album_name}</p></div>
                <div className="card--link"><button onClick={() => handleClick()}>View Lyrics</button></div>
            </div>
              
        </div>
    )
}
