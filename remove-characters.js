// O(2^n)
const removeChars = (string, toRemove) => {

    let newString = string;

    for (let i = 0; i < toRemove.length; i++) {
        let head = 0;
        while (head < newString.length) {
            if (newString[head] === toRemove[i]) {
                if (head === 0) {
                    newString = newString.slice(head + 1);
                    head --;
                } else if (head === newString.length - 1) {
                    newString = newString.slice(0, newString.length);
                    head --;
                } else {
                    newString = newString.slice(0, head) + newString.slice(head + 1)
                    head--;
                }
            }        
            head++;
        }
    }
    return newString;
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));