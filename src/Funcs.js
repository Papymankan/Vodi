function shuffleArray(array) {
    let arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        let j = Math.floor(Math.random() * (i + 1));
        console.log(i , j);
        
        // Swap elements at i and j
        [arr[i], arr[j]] = [arr[j], arr[i]];
        console.log(arr);
    }
    return arr;
}

export {shuffleArray}