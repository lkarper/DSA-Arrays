// O(n^2)
const products = (array) => {
    const productsArray = [];

    for (let i = 0; i < array.length; i++) {
        let products;
        for (let j = 0; j < array.length; j++) {
            if (j !== i) {
                if (!products) {
                    products = array[j];
                } else {
                    products = products * array[j]
                }
            }
        }
        productsArray.push(products);
    }
    return productsArray;
}

console.log(products([1, 3, 9, 4]));