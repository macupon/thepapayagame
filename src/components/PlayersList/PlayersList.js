import React, { useContext } from "react";
import "./PlayersList.css";
import {updatePontentialMatches} from '../../utils/players.js';

import PlayerCard from "../PlayerCard/PlayerCard";
import { PlayersContext } from "../../contexts/PlayersContext";

export default function PlayersList() {
  const { playersArray, addPlayer } = useContext(PlayersContext);

  const onClickAddPlayer = () => {
    addPlayer();               // add new player
    console.log(playersArray)
    updatePontentialMatches();  // update potential interactions
  };

  return (
    <div>
      <button id="btn-addPlayer" onClick={() => onClickAddPlayer()}>
        Add Player
      </button>

      <div className="playerList-div">
        {playersArray.map((player) => (
          <PlayerCard key={player.id} player={player}/>
        ))}
      </div>
      
    </div>
  );
}
