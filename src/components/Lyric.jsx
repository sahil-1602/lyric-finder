import React, { useContext } from 'react';
import {LyricContext} from '../contexts/Lyric.context';
import '../sass/_component.scss';

export default function Navbar(props) {
    const {lyrics} = useContext(LyricContext);
    console.log(lyrics);
    return (
        <div className="lyric-container">
            <div className="lyric-container--name">
                <h2>{lyrics[1].song}</h2>
                <h2>{lyrics[0].explicit == 1 ? "Explicit" : ""}</h2>
            </div>
            <h1>{lyrics[0].lyrics_body}</h1>
        </div>
    )
}