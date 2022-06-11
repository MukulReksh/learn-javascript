let isFound = false;
function findTwoNum(num) { 
    for (let i = 1; i < num;i++) { 
        for (let j = i; j < num ;j++) { 
            if (i * i + j * j  === num ) { 
                console.log(i, j);
                isFound = true;
                break;
            }
        }
    }
    return isFound;
}

function isPalindrome(num) { 
    let temp = num;
    let reverseNum = 0;
    while (temp != 0) { 
        let lastDigit = temp % 10;
        reverseNum = (reverseNum * 10) + lastDigit;
        temp = Number.parseInt(temp / 10);
    }
    return reverseNum === num;
}
function palindromeNumUpToN(num) { 
    for (let index = 1; index <= num; index++) {
        let result = isPalindrome(index);
        if (result) { 
            console.log(index);
        }
    }
}

palindromeNumUpToN(50);

