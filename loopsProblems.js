//Write a javascript program to print below pattern having numbers in pyramid form along with its mirror image

function pattern(n) { 
    let spaces = 0;
    let numbers = n;

    for (let i = 1; i <= n;i++) { 
        for (let j = 1; j <= spaces;j++) { 
            process.stdout.write(" ");
        }

        for (let j = i; j <= numbers; j++) {
          process.stdout.write(j + " ");
        }
        console.log();
        spaces++;
    }
    spaces = spaces - 2;
    for (let i = n - 1; i >= 1;i--) { 
        for (let j = 1; j <= spaces;j++) { 
            process.stdout.write(" ");
        }

        for (let j = i; j <= n;j++) { 
            process.stdout.write(j + " ");
        }

        console.log();
        spaces--;
    }
}

pattern(7);

//Write a program to find the second smallest number from array using loops concept
function secondLargest(arr) { 
    let smallest = Math.min(...arr);

    let secondSmallest = Number.MAX_VALUE;

    for (let i = 0; i < arr.length;i++) { 
        if (arr[i] < secondSmallest && arr[i] != smallest) { 
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}

console.log(secondLargest([15,17,100,12,14,-1,-5]));