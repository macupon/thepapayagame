import './Vagina.css';
import React, { useContext } from 'react'
import { PlayersContext } from '../../contexts/PlayersContext';

export default function Vagina(propsObj) {

  const {playersArray, setplayersArray} = useContext(PlayersContext);

  const {player, prop2change} = propsObj

  function onClickVagina() {

      const updatedPlayersArray = playersArray.map((item) => {
        if ((item.id === player.id) && (item[prop2change] !== "vagina")) {
          return { ...item, [prop2change]: "vagina" };
        }
        else {
          return item;
        }
      });
      setplayersArray([...updatedPlayersArray]);

      // update class
      const button = document.getElementById(`btn-vagina-${prop2change}-${player.id}`);
    
      // Alternar entre las clases
      button.classList.toggle('selected');
    }

    function getClass() {
      if (prop2change === "have"){
        if (player.have==="vagina"){
          return "vagina-img selected"
        }
        else{
          return "vagina-img"
        }
      }
      else if (prop2change === "into"){
        if (player.into==="penis" || player.into==="both"){
          return "vagina-img selected"
        }
        else{
          return "vagina-img"
        }
      }
    }
  

  return (
    <div className='vagpenis-div'>
      <button
        id={`btn-vagina-${prop2change}-${player.id}`}
        className={getClass()}
        onClick={()=> onClickVagina()}
      ></button>
    </div>
  )
}


