function devideBy9(num1,num2){


    let sum = 0;
    let nums = "";

    for(let i = num1; i<=num2;i++){
        if(i%9==0){
            nums+= `${i}\n`;
            sum+=i;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(nums);
}

devideBy9("100","200");