import React, {} from 'react';
import Navbar from './components/Navbar'
import TrackList from './components/TrackList';
import Lyric from './components/Lyric';
import SearchTrackList from './components/SearchTrackList';
import {Route, Switch} from "react-router-dom";
import {TrackProvider} from './contexts/Track.context';
import {LyricProvider} from './contexts/Lyric.context';
import {SearchTrackProvider} from './contexts/SearchTrack.context';

function App() {
  return (
      <TrackProvider>
        <LyricProvider>
          <SearchTrackProvider>
            <div>
              <Navbar/>
              <Switch>
                <Route exact path='/' render={() => <TrackList/>} />
                <Route path='/lyrics' render={() => <Lyric/>} />
                <Route path='/search/:words' render={() => <SearchTrackList/>} />
              </Switch>
            </div>
          </SearchTrackProvider>
        </LyricProvider>
      </TrackProvider>
  );
}

export default App;
