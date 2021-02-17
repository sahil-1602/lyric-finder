import React, { useContext } from 'react';
import axios from 'axios';
import '../sass/_component.scss';
import useInputState from '../hooks/useInputState';
import {SearchTrackContext} from '../contexts/SearchTrack.context';
import {useHistory } from 'react-router-dom';

export default function Navbar(props) {
    const [words, setWords, reset] = useInputState("");
    const {tracks, updateSearch} = useContext(SearchTrackContext);
    const history = useHistory();
    const search = (e) => {
        if(e.keyCode == 13){
            const MM_API = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${words}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`;
            axios.get(MM_API)
            .then((res) => {
                const data = res.data.message.body.track_list;
                updateSearch(data);
                reset();
                history.push('/search');
            })
            .catch(err => console.log(err));
        }
    }
    return (
        <div className="nav">
            <div className="nav--name">
                <h1>LyricFinder</h1>
            </div>
            <div className="nav--search">
                <input onKeyDown={(e) => search(e)} 
                    placeholder="search song lyrics...." type="text" 
                    value={words} onChange={setWords}/>
            </div>
        </div>
    )
}
