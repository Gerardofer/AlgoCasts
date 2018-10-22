// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//=============================  solution 2  =======================================================

// function anagrams(stringA, stringB){
//     return cleanString(stringA) === cleanString(stringB);
// };

// function cleanString(str){
//     return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }


// console.log(cleanString("Hello World"));


// module.exports = anagrams;


//===============================  Solution 1  =========================================================
function anagrams(stringA, stringB) {
    const newStrA = createCharMap(stringA);
    const newStrB = createCharMap(stringB);
    
    if(Object.keys(newStrA).length !== Object.keys(newStrB).length){
        return false;
    }
    
    for(let element in newStrA){
        if(newStrA[element] !== newStrB[element]){
            return false;
        }
    }
    
    return true;
        
}

function createCharMap(str){
    const newStr = {};
    
    for(let element of str.replace(/[^\w]/g, "").toLowerCase()){
        if(!newStr[element]){
            newStr[element] = 1;
        } else {
            newStr[element]++;
        }
    }
    return newStr;
}

// console.log(createCharMap("Hello There"))

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));