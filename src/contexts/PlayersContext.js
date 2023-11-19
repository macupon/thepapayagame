import { useContext,  createContext, useState } from "react";
import {randSex, randInterest,getRandomEmoji , assignRandomColor} from '../utils/random';
import {potentialMatches} from '../utils/players';

// 1 Crear el Contexto
// 2 Exportar el Contexto

let startingtArray = [
    {
        id: 1,
        name: 'Player 1',
        has: 'penis',
        into: 'vagina',
        emoji: '🐶',
        color: 'rgba(255, 77, 77, 1.0)',
        numPotentialMatches: 1
    },
    {
        id:2,
        name: 'Player 2',
        has: 'vagina',
        into: 'penis',
        emoji: '🐱',
        color: 'rgba(255, 185, 0, 1.0)',
        numPotentialMatches: 1
    }
]

export const PlayersContext = createContext([])

//3 Crear Funcion para usar el contexto
//4 Podemos definirlo como un hook personalizado
//5 Exporta la FUNCION que almacena el hook useContext

export const usePlayersContext = () => {return useContext(PlayersContext)}

export const PlayersContextProvider = ({children}) => {
    
    const [playersArray, setplayersArray] = useState(startingtArray);


    function addPlayer () {
        // Create ID
        let idArray = [];
        if (playersArray.length<4){
            playersArray.forEach(player => {
                idArray.push(player.id)
            });
            let idArrayMax = Math.max(...idArray);
            let newId = idArrayMax+1;
            // Make new name
            let newName = `Player ${newId}`;
            // Assign sex to the new player
            let mySex = randSex();
            //  Assign into to the new player
            let into = randInterest();
            // Assign emoji to the new player
            let myEmoji = getRandomEmoji(playersArray);
            //  Assign color to the new player
            let myColor = assignRandomColor(playersArray);
            // 
            let numPotentialMatches = 0;
            
            // Create new player
            let newPlayer = {
                id: newId,
                name: newName, 
                has: mySex, 
                into: into, 
                emoji: myEmoji, 
                color: myColor, 
                numPotentialMatches: numPotentialMatches
            }

            newPlayer.numPotentialMatches = potentialMatches(newPlayer, playersArray).length;

            // Add new players to players array 
            setplayersArray(prevArray => [...prevArray, newPlayer])
            
        } else {
            alert('this is an orgy!');
        }
    }
    
    //Assign a name based on the ID
    function updatePlayerName (playerId, newName) {
        const updatedPlayersArray = playersArray.map((player) => {
            if (player.id === playerId) {
              return { ...player, name:newName };
            }
            return player;
          });
          setplayersArray([...updatedPlayersArray]);
    }

    // Remove players leaving al least 2 player
    function removePlayerBtn (removePlayerId) {
        if (playersArray.length > 2) {
            const indexPlayer =  playersArray.findIndex(player => player.id === removePlayerId);
            playersArray.splice(indexPlayer, 1);
            setplayersArray([...playersArray]);
        }
    }


    const contextValue = {
        playersArray,
        setplayersArray,
        updatePlayerName,
        removePlayerBtn,
        addPlayer,
        // myGender
    };

    // console.log(playersArray);
    
    return (
        <PlayersContext.Provider value={contextValue}>
            {children}
        </PlayersContext.Provider>
    );    
};
