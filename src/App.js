import React from 'react';

import Navbar from './components/Navbar';
import TrackList from './components/TrackList';
import Lyric from './components/Lyric';
import SearchTrackList from './components/SearchTrackList';

import { TrackProvider } from './contexts/Track.context';
import { LyricProvider } from './contexts/Lyric.context';
import { SearchTrackProvider } from './contexts/SearchTrack.context';
import { PopupProvider } from './contexts/Popup.context';

import { Redirect, Route, Switch } from 'react-router-dom';

import './css/style.css';

function App() {
  return (
    <TrackProvider>
      <LyricProvider>
        <SearchTrackProvider>
          <PopupProvider>
            <div>
              <Navbar />
              <Switch>
                <Route exact path='/' render={() => <TrackList />} />
                <Route path='/lyrics/:track_id' render={() => <Lyric />} />
                <Route
                  path='/search/:words'
                  render={() => <SearchTrackList />}
                />
              </Switch>
            </div>
          </PopupProvider>
        </SearchTrackProvider>
      </LyricProvider>
    </TrackProvider>
  );
}

export default App;
