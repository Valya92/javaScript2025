function sumOfNum(num){


    let sum = 0;
    
    for(let i = 0; i < num.length; i++){
        let digit = Number(num[i]);
        sum += digit;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNum("564891");