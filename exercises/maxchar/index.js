// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //create an empty object
    const charMap = {};
    //create a count variable to keep track of max char
    let max = 0;
    //create a variable that will hold the char
    let repeatedChar = '';
    //iterate over the string and see repetitions
    for(let i = 0; i < str.length; i++){
        if(!charMap[str[i]]){
            charMap[str[i]] = 1;
        } else {
            charMap[str[i]]++;
        }
    }
    
    //loop over the object and determine the highest repeting value
    for(let elem in charMap){
        
        
        if(charMap[elem] > max){
            max = charMap[elem];
            repeatedChar = elem;
        }
    }
    
    //return that value.
    return `max char: ${repeatedChar}, repetitions: ${max}`
}

console.log(maxChar("acbcccccccdf"));

// module.exports = maxChar;
