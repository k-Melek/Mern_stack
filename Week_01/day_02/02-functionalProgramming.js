// - MAP & FILTER 


const array1 = [1,4,9,16]
const array2 = [];
for (let i = 0; i< array1.length; i++){
    array2.push(array1[i]*2)
}
// console.log(array2);

const arrayMap =  array1.map((elementOfTheArray) => elementOfTheArray*2)
// console.log(arrayMap)


// const animals = ["leopar","giraffe","zebra","elephant","monkey","lion"]

// const animalsWithO= []
// for(let i = 0; i< animals.length; i++){
//     if(animals[i].includes("o")){
//         animalsWithO.push()
//     }
// }

const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattenedArray);