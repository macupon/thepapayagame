import './Vagina.css';
import React, { useContext } from 'react'
import { PlayersContext } from '../../contexts/PlayersContext';
import {updateNumPontentialMatches} from '../../utils/players';

export default function Vagina(propsObj) {

  const {playersArray, setplayersArray} = useContext(PlayersContext);

  const {player, prop2change} = propsObj

  function onClickVagina() {

    let updatedPlayersArray

    if (prop2change === "has"){
      updatedPlayersArray = playersArray.map((item) => {
        if ((item.id === player.id) && (item[prop2change] !== "vagina")) {
          return { ...item, [prop2change]: "vagina" };
        }
        else {
          return item;
        }
      });
    }

    if (prop2change === "into"){
      const btnVag = document.getElementById(`btn-vagina-into-${player.id}`);
      const btnVagClasse = btnVag.className
      const btnPenis = document.getElementById(`btn-penis-into-${player.id}`);
      const btnPenisClasse = btnPenis.className
    
      updatedPlayersArray = playersArray.map((item) => {
        if (item.id === player.id) {

          if (btnVagClasse === "vagina-img selected" && btnPenisClasse === "penis-img selected")
            return {...item, [prop2change]:"penis"};

          else if (btnVagClasse === "vagina-img" && btnPenisClasse === "penis-img selected")
            return {...item, [prop2change]:"both"};

          // This situation shouldn't exist: there is always at least one selected
          else if (btnVagClasse === "vagina-img" && btnPenisClasse === "penis-img")
            return {...item, [prop2change]:"vagina"};

          else if (btnVagClasse === "vagina-img selected" && btnPenisClasse === "penis-img")
            return item;
        }
        else {
          return item;
        }
      })
    };
    // update the array with the new potential interactions
    updatedPlayersArray = updateNumPontentialMatches(updatedPlayersArray)
    setplayersArray([...updatedPlayersArray]);
    }

    function getClass() {
      if (prop2change === "has"){
        if (player.has==="vagina"){
          return "vagina-img selected"
        }
        else{
          return "vagina-img"
        }
      }
      else if (prop2change === "into"){
        if (player.into==="vagina" || player.into==="both"){
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


