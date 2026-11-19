import React from 'react';

import axios from 'axios';

import PlayerForm from './Player/PlayerForm';
import PlayerList from './Player/PlayerList';
import PlayerSingl from './Player/PlayerSingl';

import './App.css'

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      players: [],
      currentPlayer: {}
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
  }
  componentDidMount() {
    const url = 'http://localhost:3030/players';

    axios.get(url)
    .then((Response) => {
      this.setState({
        players: Response.data
      })
    })
    .catch((error) => console.log(error))
  }
  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item
    })
  }
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div className="nav-wrapper blue darkern-1">
              <a href="/" className='brand-logo'>Soccer Managmant</a>
            </div>
          </nav>
          
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList 
              players = { this.state.players }
              updateCurrentPlayer = {this.updateCurrentPlayer}
            />
          </div>
          <div className="col s9">
            <PlayerSingl player={this.state.currentPlayer} />
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
