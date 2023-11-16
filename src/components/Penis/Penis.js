import './Penis.css';
import React, { useContext } from 'react'
import { PlayersContext } from '../../contexts/PlayersContext';

export default function Penis(propsObj) {

  const {playersArray, setplayersArray} = useContext(PlayersContext);

  const {player, prop2change} = propsObj

 
  function onClickPenis() {

    const updatedPlayersArray = playersArray.map((item) => {
      if ((item.id === player.id) && (item[prop2change] !== "penis")) {
        return { ...item, [prop2change]: "penis" };
      }
      else {
        return item;
      }
    });
    setplayersArray([...updatedPlayersArray]);

    // update class
    const button = document.getElementById(`btn-penis-${prop2change}-${player.id}`);
    
    // Alternar entre las clases
    button.classList.toggle('selected');
  }
  
  function getClass() {
    if (prop2change === "have"){
      if (player.have==="penis"){
        return "penis-img selected"
      }
      else{
        return "penis-img"
      }
    }
    else if (prop2change === "into"){
      if (player.into==="penis" || player.into==="both"){
        return "penis-img selected"
      }
      else{
        return "penis-img"
      }
    }
  }

  return (
    <div className='vagpenis-div'>
      <button
        id={`btn-penis-${prop2change}-${player.id}`}
        className={getClass()}
        onClick={()=> onClickPenis()}
      ></button>
    </div>
  )
}
