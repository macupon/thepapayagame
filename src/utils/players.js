


export function updatePontentialMatches(ArrayOfPlayers) {
    // Update interactions of all players
    ArrayOfPlayers.forEach(player => {
      player.potentialMatches = potentialMatches(player, ArrayOfPlayers).length


      const playerInteracts = document.getElementById(`interacts_${player.id}`);
      playerInteracts.innerHTML = `Interacts with: ${player.potentialMatches}`;
      if (player.potentialMatches===0) {
        playerInteracts.classList.add("None")
      }
      else {playerInteracts.classList.remove("None")}
        
    });
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