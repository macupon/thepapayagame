// Generate a random emoji
export const getRandomEmoji = (ArrayOfPlayers) => {
    const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐙', '🐢', '🦆', '🦑', '🐍', '🦎', '🦕']

    const usedEmojis = new Set(ArrayOfPlayers.map(obj => obj.emoji));
    const availableEmojis = emojis.filter(emoji => !usedEmojis.has(emoji));
    if (availableEmojis.length === 0) {
      // if all colors are already used, return null or throw an error
      return null;
    }
    const randomIndex = Math.floor(Math.random() * availableEmojis.length);
    return availableEmojis[randomIndex]
}


export const assignRandomColor = (ArrayOfPlayers) => {
    // const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];
    const colors = [
        'rgba(255, 77, 77, 1.0)',    // red
        'rgba(255, 185, 0, 1.0)',    // orange
        'rgba(255, 204, 153, 1.0)',  // pale orange
        // 'rgba(204, 255, 153, 1.0)',  // green
        'rgba(153, 204, 255, 1.0)',  // blue
        'rgba(255, 153, 255, 1.0)',  // purple
        'rgba(255, 102, 102, 1.0)',  // salmon
        // 'rgba(255, 204, 204, 1.0)',  // pale pink bah
        'rgba(255, 153, 51, 1.0)',   // tangerine
        'rgba(153, 102, 255, 1.0)',  // lavender
        'rgba(255, 102, 255, 1.0)',  // fuchsia
        // 'rgba(204, 255, 255, 1.0)',  // light blue
        'rgba(255, 204, 0, 1.0)',    // mustard
        // 'rgba(204, 255, 204, 1.0)',  // mint
        'rgba(255, 102, 0, 1.0)',    // deep orange
        'rgba(46, 204, 113, 1.0)',   // emerald green
        'rgba(52, 152, 219, 1.0)',   // bright blue
        'rgba(155, 89, 182, 1.0)',   // purple
        'rgba(230, 126, 34, 1.0)',   // dark orange
        'rgba(52, 73, 94, 1.0)'      // dark blue-grey
        ];

    const usedColors = new Set(ArrayOfPlayers.map(obj => obj.color));
    const availableColors = colors.filter(color => !usedColors.has(color));
    if (availableColors.length === 0) {
    // if all colors are already used, return null or throw an error
    return null;
    }
    const randomIndex = Math.floor(Math.random() * availableColors.length);
    return availableColors[randomIndex]
}



// export function findMaxID(objects) {
//     const maxObject = objects.reduce((max, obj) => {
//         return obj["id"] > max["id"] ? obj : max;
//     }, { ["id"]: -Infinity });
    
//     return maxObject["id"];
// }
    

export function randSex() {
    const sexs = ["penis","vagina"]
    return sexs[Math.floor(Math.random() * sexs.length)];
}
    

export function randInterest() {
    const interests = ["penis","vagina", "Both"]
    return interests[Math.floor(Math.random() * interests.length)];
}


export function toggleNumberInArray(number, arr) {
    const index = arr.indexOf(number);
    if (index === -1) {
      arr.push(number);
    } else {
      arr.splice(index, 1);
    }
}