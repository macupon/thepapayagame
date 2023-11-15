import './Vagina.css';
import React, { useContext } from 'react'
import { PlayersContext } from '../../contexts/PlayersContext';

export default function Vagina(propsObj) {

  const {playersArray, setplayersArray} = useContext(PlayersContext);

  const {player, prop2change} = propsObj

  function activateVagina() {

      const updatedPlayersArray = playersArray.map((item) => {
        if ((item.id === player.id) && (item[prop2change] !== "vagina")) {
          return { ...item, [prop2change]: "vagina" };
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
        id="vagina-img"
        className='vagpenis-img'
        onClick={()=> activateVagina()}
      ></button>
    </div>
  )
}


