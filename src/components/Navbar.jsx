import React, {  } from 'react';
import '../sass/_component.scss';

export default function Navbar(props) {
    const search = (e) => {
        if(e.keyCode == 13) alert("value");
    }
    return (
        <div className="nav">
            <div className="nav--name">
                <h1>LyricFinder</h1>
            </div>
            <div className="nav--search">
                <input onKeyDown={(e) => search(e)} placeholder="search song lyrics...." type="text"/>
            </div>
        </div>
    )
}
