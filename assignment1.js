//creating a calculator programme

//for addition
function add(num1, num2) { 
    return num1 + num2;
}
//for subtraction
function subtraction(num1, num2) {
    return num1 - num2;
}

//for multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

//for division
function divide(num1, num2) {
    return num1 / num2;
}

//getting remainder
function remainder(num1, num2) {
    return num1 % num2;
}

console.log("the addition result is : " + add(5, 10));
console.log("the subtraction result is : " + subtraction(10, 15));
console.log("the multiplication result is : " + multiply(4, 6));
console.log("the division result is : " + divide(20, 2));
console.log("the remainder result is : " + remainder(15, 3));

