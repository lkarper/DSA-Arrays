// 0(n), where n = string.length
const urlify = (string) => {
    // simplest implementation
    // return string.split(' ').join('%20');
    let copy = string;
    let reps = 0;
    const chars = string.split('');
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === ' ') {
            copy = copy.slice(0, i + (reps * 2)) + '%20' + copy.slice(i + 1 + (reps * 2));
            reps ++;
        }
    }
    return copy;
}

// console.log(urlify('tauhida parveen'));
console.log(urlify('www.thinkful.com /tauh ida parv een'))