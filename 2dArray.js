// Write an efficient algorithm to search a value in a 2D matrix in which the rows are in sorted order and the first integer of each row is greater than the last integer of the previous row.
function index(arr, element) {
    var i = arr.length - 1//
    var b = []
    for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] === element) {
            b.push(i)
            b.push(j)
            return b
        }
        if (arr[i][j] > element) {
            for (let k = i - 1; k >= 0; k--) {
                if (arr[k][j] === element) {
                    b.push(k)
                    b.push(j)
                    return b
                }
            }
        }
    }

    return -1;//if not found
}

console.log(index([[1,5,7,9],[11,18,21,23],[12,20,31,41],[14,18,37,39]],21));


function maxUniqueElements(matrix) { 
    let ans = 0;
    for (let i = 0; i < matrix.length; i++) { 
        let freq = {};
        let count = 0;
        for (let j = 0; j < matrix[i].length;j++) { 
            if (freq[matrix[i][j]] === undefined) {
                freq[matrix[i][j]] = 1;
            } else { 
                freq[matrix[i][j]]+=1;
            }
        }
        count = Object.keys(freq).length;
        ans = Math.max(ans, count);
    }
    return ans;
}

console.log(maxUniqueElements([[1, 2, 3, 4], [2, 4, 8, 8], [4, 4, 3, 3], [1, 1, 1, 1]]));