import React from "react";
import { connect } from "react-redux";

import Player from "./player.js";

import * as actions from "../store/players-actions.js";

class App extends React.Component {
  componentDidMount() {
    console.log("componentdidmount");
    fetch("https://javascript-401-api.herokuapp.com/api/v1/players")
      .then(res => res.json())
      .then(players => {
        console.log(players);
        this.props.savingApiDataToReduxState(players);
      });
  }
  deletePlayer = id => {
    this.props.handleDelete(id);
  };

  render() {
    return (
      <div>
        <h2>Players</h2>
        <ul>
          {this.props.players.map((player, idx) => (
            <li key={idx}>
              {player.name}
              <button onClick={() => this.deletePlayer(idx)}>Delete</button>
              <button
                onClick={() => {
                  this.props.handleEditFill(idx);
                }}
              >
                Update
              </button>
            </li>
          ))}
        </ul>
        <Player />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "LOGGIN STATE!");
  return {
    players: state.players.players
  };
};

const mapDispatchToProps = (dispatch, getState) => ({
  handleDelete: id => dispatch(actions.destroy(id)),
  handleEditFill: id => dispatch(actions.editFill(id)),
  savingApiDataToReduxState: players =>
    dispatch(actions.savingApiDataToReduxState(players))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
