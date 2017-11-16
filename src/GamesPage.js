import React from 'react';
import GamesList from './GamesList';
import { connect } from 'react-redux';
import { fetchGames, deleteGame } from './actions';

class GamesPage extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    return (
      <div>
        <h1>Games List</h1>

        <GamesList games={this.props.games} deleteGame={this.props.deleteGame} />
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage);