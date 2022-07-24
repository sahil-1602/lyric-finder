import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LyricContext } from '../contexts/Lyric.context';

export default function Track(props) {
  const { updateLyric } = useContext(LyricContext);
  const history = useHistory();
  let song = props.track;

  const handleClick = () => {
    updateLyric(song);
    let url = `/lyrics/${song.track_id}`;
    history.push(url);
  };

  return (
    <div className='card'>
      <div className='card--img'>
        <img src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg' />
      </div>
      <div className='card--details'>
        <div className='card--track'>
          <h4>{song.track_name}</h4>
        </div>
        <div className='card--part2'>
          <div className='card--artist'>
            <p>
              <span>Artist</span> : {song.artist_name}
            </p>
          </div>
          <div className='card--artist'>
            <p>
              <span>Album</span> : {song.album_name}
            </p>
          </div>
        </div>
      </div>
      <div className='card--link'>
        <button onClick={() => handleClick()}>View Lyrics</button>
      </div>
    </div>
  );
}
