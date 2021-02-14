import React, { useContext } from 'react'
import Track from './Track';
import {TrackContext} from '../contexts/Track.context';

export default function Navbar(props) {
    const {tracks} = useContext(TrackContext);
    
    return (
        <div className="track-list">
            <div className="track-list--head"><h2>Top 10 tracks</h2></div>
            <div className="track-list--list">
                {tracks.map((track, i) => {
                    return <Track track={track.track} key={i} idx={i}/>
                })}
            </div>
        </div>
    )
}