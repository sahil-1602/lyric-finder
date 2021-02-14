import React, { useContext } from 'react';
import {LyricContext} from '../contexts/Lyric.context';

export default function Navbar(props) {
    const {lyrics} = useContext(LyricContext)
    return (
        <div>
            <h1>{lyrics.lyrics_body}</h1>
        </div>
    )
}