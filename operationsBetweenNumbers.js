function operations(num1,num2,operator) {

    let result = 0;
   

    if (operator === "+") {
        result += num1 + num2;
    } else if (operator === "-") {
        result += num1 - num2;
    } else if (operator === "*") {
        result += num1 * num2;
    } else if (operator === "/" && num2 != 0) {
        result += num1 / num2;
    } else if (operator === "/" && num2 === 0) {
        result = `Cannot divide ${num1} by zero`;
    } else if (operator === "%" && num2 !=0) {
        result += num1 % num2;
    }else if(operator === "%" && num2 === 0){
        result = `Cannot divide ${num1} by zero`;
    }

    let oddOrEven = "";
    if(result%2===0){
        oddOrEven = "even"
    }else{
        oddOrEven = "odd"
    }

    if (operator === "+" || operator === "-" || operator === "*") {
        console.log(`${num1} ${operator} ${num2} = ${result} - ${oddOrEven}`);
    } else if (operator === "/" && num2 != 0) {
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
    } else if (operator === "/" && num2 === 0) {
        console.log(result);
    } else if (operator === "%"&& num2 !=0) {
        console.log(`${num1} % ${num2} = ${result}`);
    }else if(operator === "%" && num2 === 0){
        console.log(result);
    }


}

operations(10, 0, "%");