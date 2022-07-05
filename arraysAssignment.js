// /"1)Write a method that accepts an array of integers and updates every element with multiplication of previous and next elements.

function modifyArray(arr) {
    if (arr.length > 1) { 
        for (let i = 0; i < arr.length;i++) { 
            if (i == 0) {
                arr[i] = arr[i] * arr[i + 1];
            } else if (i == arr.length - 1) {
                arr[i] = arr[i] * arr[i - 1];
            } else { 
                arr[i] = arr[i + 1] * arr[i - 1];
            }
    }
    }
    console.log(arr);
}

modifyArray([1, 2, 3, 4, 5]);

//2) Move all negative numbers to the end and positive to the beginning of the array without using any predefined sorting method.

function moveNegatives(arr) { 
    let negatives = [];
    let postivies = [];
    for (let i = 0; i < arr.length;i++) { 
        if (arr[i] > -1) {
            postivies.push(arr[i]);
        } else { 
            negatives.push(arr[i]);
        }
    }
    return postivies.concat(negatives);
}

console.log(moveNegatives([-1,-4,2,3,5,8,-6]));