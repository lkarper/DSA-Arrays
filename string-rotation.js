// O(n), where n is the length of the string
function stringRotation(string1, string2) {
    
    if (string1.length !== string2.length) {
        return false;
    }

    if (string1 === string2) {
        return true;
    }

    for (let i = 0; i < string1.length; i++) {
        string2 = string2.slice(1) + string2[0];
        if (string1 === string2) {
            return true;
        }
    }

    return false;
}

console.log(stringRotation('amazon', 'azonma'));
console.log(stringRotation('amazon', 'azonam'));
