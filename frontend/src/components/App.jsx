import React from 'react';

import PlayerForm from './Player/PlayerForm';
import PlayerList from './Player/PlayerList';
import PlayerSingl from './Player/PlayerSingl';

import './App.css'

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s12">Menu</div>
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList />
          </div>
          <div className="row s9">
            <PlayerSingl />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <PlayerForm />
          </div>

        </div>
      </div>
    )
  }
}

export default App
