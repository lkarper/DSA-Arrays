// Filters an array of number so that any number less than five is contained in the array
const filter = (array) => {
    let atLeastFive = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 5) {
            atLeastFive.push(array[i]);
        }
    }
    return atLeastFive;
}

console.log(filter([2, 4, 1, 6, 89, 5, 2, 32]));