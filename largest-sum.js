// Finds the largest sum in a continuous sequence 

const largestSum = (array) => {

    let largestSum = 0;
    for (let i = 0; i < array.length; i++) {
        let contSum = array[i];
        for (let j  = i + 1; j < array.length; j++) {
            contSum = contSum + array[j];
            if (contSum > largestSum) {
                largestSum = contSum;
            }
        }    
    }
    return largestSum
}

console.log(largestSum([4, 6, -3, 5, -2, 1]))