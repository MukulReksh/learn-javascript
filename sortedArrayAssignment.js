//1. Write code for creating a new sorted array from two sorted arrays in O (n + m) time complexity where n and m are the size of the unsorted arrays.

const { clear } = require("console");

function createSortedArray(arr1,arr2) { 
    let i = 0, j = 0;
    let ans = [];
    while (i < arr1.length && j < arr2.length) { 
        if (arr1[i] <= arr2[j]) {
            ans.push(arr1[i++]);
        } else { 
            ans.push(arr2[j++]);
        }
    }

    while (i < arr1.length) { 
        ans.push(arr1[i++]);
    }

    while (j < arr2.length) {
      ans.push(arr2[j++]);
    }

    return ans;
}

console.log(createSortedArray([5, 7, 9, 10, 15, 24], [1, 2, 3, 4, 5, 15, 20]));

//2. Write code for finding the smallest element in an array.

function smallestInArray(arr) { 
    return Math.min(...arr);
}

console.log(smallestInArray([15, 7, 6, 8, 22, 27, 1]));