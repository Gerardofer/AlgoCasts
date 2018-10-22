// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
    
    for(let i = 0; i < n; i++){
        results.push([]);
    }
    
    let colStart = 0;
    let colEnd = n - 1;
    let rowStart = 0;
    let rowEnd = n - 1;
    
    let counter = 1;
    
    while(rowStart <= rowEnd && colStart <= colEnd){
        //Top Row
        for(let i = colStart; i <= colEnd; i++){
            results[rowStart][i] = counter;
            counter++;
        }
        rowStart++;
        
        //far right col
        for(let i = rowStart; i <= rowEnd; i++){
            results[i][colEnd] = counter;
            counter++;
        }
        colEnd--;
        
        //bottom row
        for(let i = colEnd; i >= colStart; i--){
            results[rowEnd][i] = counter;
            counter++;
        }
        rowEnd--;
        
        //left col
        for(let i = rowEnd; i >= rowStart; i--){
            results[i][colStart] = counter;
            counter++;
        }
        colStart++;
    }
    return results;
}

console.log(matrix((6)));

// module.exports = matrix;
