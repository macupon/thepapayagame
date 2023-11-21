import {randSex, randInterest,getRandomEmoji , assignRandomColor} from '../utils/random';


// export function updatePontentialMatches(ArrayOfPlayers) {
//     // Update interactions of all players
//     ArrayOfPlayers.forEach(player => {
//       player.potentialMatches = potentialMatches(player, ArrayOfPlayers).length


//       const playerInteracts = document.getElementById(`interacts_${player.id}`);
//       playerInteracts.innerHTML = `Interacts with: ${player.potentialMatches}`;
//       if (player.potentialMatches===0) {
//         playerInteracts.classList.add("None")
//       }
//       else {playerInteracts.classList.remove("None")}
        
//     });
// }

export function updateNumPontentialMatches(playersArray){
    const updatedPlayersArray = playersArray.map((player) => {
        const updatedPlayerInteractions = potentialMatches(player, playersArray).length
        return { ...player, numPotentialMatches:updatedPlayerInteractions };
    });
    return updatedPlayersArray
}

export function makeNewPlayer(playersArray) {
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

        return newPlayer
        
    } else {
        alert('this is an orgy!');
    }
}




export function potentialMatches(player, players){
    // create an array of players without current player
    const playersWithoutPlayer = players.filter(obj => obj.id!==player.id)

    // filter array with potential matches based on current player interest
    let filter_by_player_into
    if (player.into==="both") {
        filter_by_player_into = playersWithoutPlayer
    }
    else {
        filter_by_player_into = playersWithoutPlayer.filter(obj => obj.has === player.into)
    }

    // filter such that the receiver is also interested in current player
    let filter_by_others_into = filter_by_player_into.filter(obj => obj.into === player.has || obj.into === "both")

    return filter_by_others_into
}