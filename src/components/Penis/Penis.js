import './Penis.css';
import React, { useContext } from 'react'
import { PlayersContext } from '../../contexts/PlayersContext';

export default function Penis(propsObj) {

  const {playersArray, setplayersArray} = useContext(PlayersContext);

  const {player, prop2change} = propsObj

  function activatePenis() {

      const updatedPlayersArray = playersArray.map((item) => {
        if ((item.id === player.id) && (item[prop2change] !== "penis")) {
          return { ...item, [prop2change]: "penis" };
        }
        else {
          return item;
        }
      });
      setplayersArray([...updatedPlayersArray]);
    }

  return (
    <div className='vagpenis-div'>
      <button
      id="penis-img"
      className='vagpenis-img'
      onClick={()=> activatePenis()}
      ></button>
    </div>
  )
}
