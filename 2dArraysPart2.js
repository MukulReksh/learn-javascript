//Given a 1D array of size 10 , convert it into a 2D array of size 2x5
function convertTo2DArray(arr) {
    let temp = [];
    let innerArray = arr.slice(0, 5);
    temp.push(innerArray);
    innerArray = arr.slice(5, 10);
    temp.push(innerArray);
    
    console.log(temp);
} 

convertTo2DArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function boundaryEl(matrix) { 
    let sum = 0;
    for (let i = 0; i < matrix.length;i++) { 
        for (let j = 0; j < matrix[i].length;j++) { 
            if (i == j || i + j == matrix.length - 1 || i == 0 || i == matrix.length - 1 ||j == 0 || j == matrix.length - 1) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}

console.log(boundaryEl([[1,2,3,4,1],[5,6,7,8,2],[9,10,11,12,13],[13,14,15,16,15],[11,12,15,19,15]]));
