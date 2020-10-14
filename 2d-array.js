// O(n^2 + 2n)
const arraySearcher = (twoDArray) => {

    const newArray = [];
    
    for (let row of twoDArray) {
        newArray.push([...row]);
    }

    console.log(newArray)

    for (let i = 0; i < twoDArray.length; i++) {
        for (let j = 0; j < twoDArray[i].length; j++) {
            if (twoDArray[i][j] === 0) {
                for (let k = 0; k < newArray[i].length; k++) {
                    newArray[i][k] = 0;
                }
                for (let l = 0; l < newArray.length; l++) {
                    newArray[l][j] = 0;
                }
            }
        }
        console.log(newArray)
    }

    return newArray;
}

const input = [
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
];

const newArray = arraySearcher(input);

console.log(newArray)

