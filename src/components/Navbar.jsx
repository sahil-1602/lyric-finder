import React from 'react';
import useInputState from '../hooks/useInputState';
import { useHistory } from 'react-router-dom';

export default function Navbar(props) {
  const [words, setWords, reset] = useInputState('');
  const history = useHistory();

  const search = (e) => {
    if (e.keyCode == 13) {
      reset();
      history.push(`/search/${words}`);
    }
  };

  return (
    <div className='nav'>
      <div className='nav--name'>
        <h1 onClick={() => history.push('/lyric-finder')}>LyricFinder</h1>
      </div>
      <div className='nav--search'>
        <input
          onKeyDown={(e) => search(e)}
          placeholder='search song lyrics....'
          type='text'
          value={words}
          onChange={setWords}
        />
      </div>
    </div>
  );
}
