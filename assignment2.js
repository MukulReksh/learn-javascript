
function fizzBuzz() { 
    for (let i = 1; i <= 100;i++) { 
        if (i % 15 == 0) {
            console.log("6indBuzz");
        } else if (i % 3 == 0) {
            console.log("Relevel");
        } else if (i % 5 == 0) {
            console.log("Buzz ");
        } else { 
            console.log(i);
        }
    }
}

//is odd or even
function isOddOrEven(n) { 
    return n % 2 == 0 ? "Even" : "odd";
}


//finding is a number is perfect square or not
function isPerfectSquare(num) {
  for (let i = 1; i * i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
}

fizzBuzz();
console.log(isOddOrEven(25));
console.log(isPerfectSquare(525));