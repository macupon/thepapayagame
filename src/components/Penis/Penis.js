import './Penis.css';
import React, { useContext } from 'react'
import { PlayersContext } from '../../contexts/PlayersContext';

export default function Penis(propsObj) {

  const {playersArray, setplayersArray} = useContext(PlayersContext);

  const {player, prop2change} = propsObj

 
  function onClickPenis() {

    if (prop2change === "has"){

      const updatedPlayersArray = playersArray.map((item) => {
        if ((item.id === player.id) && (item[prop2change] !== "penis")) {
          return { ...item, [prop2change]: "penis" };
        }
        else {
          return item;
        }
        }
      )
      setplayersArray([...updatedPlayersArray]);
    };

    if (prop2change === "into"){
      const btnVag = document.getElementById(`btn-vagina-into-${player.id}`);
      const btnVagClasse = btnVag.className
      const btnPenis = document.getElementById(`btn-penis-into-${player.id}`);
      const btnPenisClasse = btnPenis.className

      const updatedPlayersArray = playersArray.map((item) => {
        if (item.id === player.id) {

          if (btnVagClasse === "vagina-img selected" && btnPenisClasse === "penis-img selected")
            return {...item, [prop2change]:"vagina"};

          else if (btnVagClasse === "vagina-img" && btnPenisClasse === "penis-img selected")
            return item;

          // This situation shouldn't exist: there is always at least one selected
          else if (btnVagClasse === "vagina-img" && btnPenisClasse === "penis-img")
            return {...item, [prop2change]:"penis"};

          else if (btnVagClasse === "vagina-img selected" && btnPenisClasse === "penis-img")
            return {...item, [prop2change]:"both"};
        }
        else {
          return item;
        }
      })
    
      setplayersArray([...updatedPlayersArray]);
    };

    
  }


  
  function getClass() {
    if (prop2change === "has"){
      if (player.has==="penis"){
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
