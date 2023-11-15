import React, { useContext } from "react";
import "./PlayersList.css";

import PlayerCard from "../PlayerCard/PlayerCard";
import { PlayersContext } from "../../contexts/PlayersContext";

export default function PlayersList() {
  const { playersArray, addPlayer } = useContext(PlayersContext);

  // function removePlayer () {};

  return (
    <div>
      <button id="btn-addPlayer" onClick={() => addPlayer()}>
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
