//bikers question
function haltsCovered(a,b,arr,k,l) { 
    let totalDistanceForA = a * k;
    let totalDistanceForB = b * l;

    let countA = 0;
    let countB = 0;

    arr.sort(function (a, b) { 
        return a - b;
    });

    arr.forEach(function (el) { 
        totalDistanceForA = totalDistanceForA - el;
        totalDistanceForB = totalDistanceForB - el;

        if (totalDistanceForA >= 0) {
          countA++;
        } if (totalDistanceForB >= 0) {
          countB++;
        }
    });

    console.log(`A can cover ${countA} and B can cover ${countB} halts`);
}

haltsCovered(10, 12, [40, 98, 134, 179, 211, 248], 20, 15);

//2question prompt is not covered yet

//3 question
function pattern(str) {
    let ans = "";
    for (let i = parseInt(str.length / 2); i < str.length;i++) { 
        ans += str[i];
        console.log(ans);
    }

    for (let i = 0; i < parseInt(str.length / 2);i++) { 
        ans += str[i];
        console.log(ans);
    }
}

pattern("welcome");

//q4 to uppercase

function uppercase(arr) { 
    arr.sort(function (a,b) { 
        return a - b;
    });

    for (let i = 0; i < arr.length; i++) {
        let output = "";
        for (let j = 0; j < arr[i].length;j++) { 
            let code = arr[i].charCodeAt(j);
            output += String.fromCharCode(code - 32);
            
        }
        arr[i] = output;
    }
    console.log(arr);
}

uppercase(["bhawna","mukul","seeta","geeta"]);