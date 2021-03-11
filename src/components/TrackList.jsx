import React, { useContext } from 'react'
import Track from './Track';
import {TrackContext} from '../contexts/Track.context';
import Loader from './Loader';
import Popup from './Popup';
import {PopupContext} from '../contexts/Popup.context';

export default function Navbar(props) {
    const {tracks, loader} = useContext(TrackContext);
    const {isOpen, togglePopup} = useContext(PopupContext);

    if(isOpen){
        return(
            <div className="track-list">
                <Popup/>
            </div>
        )
    }else{
        return (
        <div className="track-list">
            <div className="track-list--head"><h2>Top 10 tracks</h2></div>
            <div className="track-list--list">

                {loader ? <Loader/> : tracks.map((track, i) => {
                    return <Track track={track.track} key={i} idx={i}/>
                })}
            </div>
        </div>
    )
    }
}