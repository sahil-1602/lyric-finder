import React, {useEffect} from 'react';
import Navbar from './components/Navbar'
import TrackList from './components/TrackList';
import Lyric from './components/Lyric';
import {Route, Switch} from "react-router-dom";
import {TrackProvider} from './contexts/Track.context';
import {LyricProvider} from './contexts/Lyric.context';

function App() {
  return (
      <TrackProvider>
        <LyricProvider>
          <div>
            <Navbar/>
            <Switch>
              <Route exact path='/' render={() => <TrackList/>} />
              <Route path='/lyrics' render={() => <Lyric/>} />
            </Switch>
          </div>
        </LyricProvider>
      </TrackProvider>
  );
}

export default App;
