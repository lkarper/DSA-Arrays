// merges two sorted arrays into one sorted array

const merge = (arr1, arr2) => {
    const longest = arr1.length > arr2.length ? arr1 : arr2;
    const shortest = arr1.length > arr2.length ? arr2 : arr1;

    let head = 0;
    for (let i = 0; i < shortest.length; i++) {
        if (shortest[i] > longest[longest.length-1]) {
                longest[longest.length] = shortest[i];
            }
            if (i === 0 && head === 0) {
                if (shortest[i] < longest[head]) {
                    const len = [...longest].length;
                    for (let k = len; k > head; k--) {
                        longest[k] = longest[k - 1];
                    }
                    longest[head] = shortest[i];
                    head = head + 2;
                }
            } else {
                if (shortest[i] >= longest[head] && shortest[i] <= longest[head+1])  {
                    const len = [...longest].length;
                    for (let k = len; k > head; k--) {
                        longest[k] = longest[k - 1];
                    }
                    longest[head+1] = shortest[i]
                    head = head + 2;
                } 
            }
    }

    return longest;
}

console.log(merge([1, 3, 6, 8, 11, 12], [2, 3, 5, 8, 9, 10]))