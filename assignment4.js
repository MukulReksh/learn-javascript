function astroguru(noOfChild,spouseName,location,job) { 
    console.log(`you will be a ${job} in ${location} and married to ${spouseName} with ${noOfChild}`);
}

astroguru(4, 'bhawna', 'chandigarh', 'sde');

function large(num1,num2) { 
    if (num1 === num2) { 
        return `both are equal`;
    }
    else if (num1 > num2) {
        return num1;
    } else { 
        return num2;
    }
}

console.log(large(15,17));