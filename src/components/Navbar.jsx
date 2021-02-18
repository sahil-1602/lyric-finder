import React, { useContext } from 'react';
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
            updateSearch({words:words});
            reset();
            history.push('/search');
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
