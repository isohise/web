function getSortedArray(array, key) {
    const n = array.length;

    for (let i = 0; i < n; i++) {
        let swapped = false; 
        
        for (let j = 0; j < n - i - 1; j++) {
            if (typeof array[j][key] === 'string' && typeof array[j + 1][key] === 'string') 
                {
                if (array[j][key] > array[j + 1][key]) {
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = true;
                }
            } 
            else if (typeof array[j][key] === 'number' && typeof array[j + 1][key] === 'number') 
                {
                if (array[j][key] > array[j + 1][key]) {
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = true;
                }
            }
        }
        
        if (!swapped) {
            break;
        }
    }
    
    return array;
}


const data = [
    { name: "Грибной суп-пюре", cost: 130 },
    { name: "Гороховый суп", cost: 125 },
    { name: "Рассольник", cost: 135 },
    { name: "Борщ", cost: 150 },
    { name: "Суп с клецками", cost: 105 }
];

const sortedData = getSortedArray(data, 'cost');
console.table(sortedData);

const sortedData2 = getSortedArray(data, 'name');
console.table(sortedData);