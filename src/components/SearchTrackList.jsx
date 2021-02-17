import React, {useContext} from 'react';
import Track from './Track';
import {SearchTrackContext} from '../contexts/SearchTrack.context';

export default function Navbar(props) {
    const {tracks} = useContext(SearchTrackContext);
    
    return (
        <div className="track-list">
            <div className="track-list--head"><h2>Results</h2></div>
            <div className="track-list--list">
                {tracks.map((track, i) => {
                    return <Track track={track.track} key={i} idx={i}/>
                })}
            </div>
        </div>
    )
}
