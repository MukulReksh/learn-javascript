//Given an array having 0,1 as input. We need to write a function that sorts the array in ascending order without using inbuilt sort function

function sortZeroAndOne(arr) { 
    let i = 0, j = arr.length - 1;

    while (i < j) {
        
        if (arr[i] == 1 && arr[j] == 0) { 
            //swap them
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        if (arr[i] == 0 ) { 
            i++;
        } if (arr[j] == 1) {
            j--;
        }
    }
    console.log(arr);
}

sortZeroAndOne([0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1]);


function magicSquare(matrix) { 
    //checking length of rows and cols
    if (matrix.length != matrix[0].length) { 
        return false;
    }
    let distictEl = matrix.flat();
    console.log(distictEl);
    let freq = {};
    for (let i = 0; i < distictEl.length;i++) { 
        if (freq[distictEl] != undefined) { 
            return false;
        }
    }
    //check row sum col sum and diagonal sum are eqaual or not
    let rowSum = 0;
    for (let i = 0; i < matrix.length;i++) { 
        for (let j = 0; j < matrix[i].length;j++) { 
            rowSum += matrix[i][j];
        }
    }

    let colSum = 0;
    for (let j = 0; j < matrix[0].length;j++) { 
        for (let i = 0; i < matrix.length;i++) { 
            colSum += matrix[i][j];
        }
    }

    let diagonalSum = 0;
    for (let i = 0; i < matrix.length;i++) { 
        let j = i;
        diagonalSum += matrix[i][j++];
    }

    if (rowSum != colSum || colSum != diagonalSum) { 
        return false;
    }

    return true;
}

console.log(
  magicSquare([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
