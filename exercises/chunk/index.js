// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    //create a new array
    const newArray = [];
    //iterate over the existing array
    for (let element of array){
        //create a variable for the last element in the new array
        const last = newArray[newArray.length - 1];
        //if element in new array does not exist or if element's length is equal to size, create new sub-array
        if(!last || last.length === size){
            newArray.push([element]);
        } else {
            last.push(element);
        }
    }
    //return new array
    return newArray;
}

console.log(chunk([1, 2, 3, 4, 5,6,7,3,9,10], 10));
// module.exports = chunk;