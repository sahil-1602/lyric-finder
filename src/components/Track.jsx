import React, { useContext  } from 'react';
import '../sass/_component.scss';
import axios from 'axios';
import {useHistory } from 'react-router-dom';
import {LyricContext} from '../contexts/Lyric.context';

export default function Track(props) {

    let song = props.track
    const history = useHistory();
    const { updateLyric } = useContext(LyricContext);

    const handleClick = () => {
        const MM_LYRIC_API = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${song.track_id}&apikey=${process.env.REACT_APP_MM_KEY}`;
        axios.get(MM_LYRIC_API)
        .then((res) => {
            const lyric = res.data.message.body.lyrics;
            const track = {
                song: song.track_name,
            }
            const lyricsWithTrackName = [lyric, track];
            updateLyric(lyricsWithTrackName);
            history.push('/lyrics');
        })
        .catch(err => console.log(err));
    };
    
    return (
        <div className="card">
            <div className="card--img">
                <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg" />
            </div>
            <div className="card--details">
                <div className="card--track"><h4>{song.track_name}</h4></div>
                <div className="card--part2">
                <div className="card--artist"><p><span>Artist</span> : {song.artist_name}</p></div>
                <div className="card--artist"><p><span>Album</span> : {song.album_name}</p></div>
                <div className="card--link"><button onClick={() => handleClick()}>View Lyrics</button></div>
                </div> 
            </div>   
        </div>
    )
}
