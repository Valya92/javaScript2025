function histogram(input) {

    let numbers = Number(input[0]);
    let numLess200 = 0;
    let num200To399 = 0;
    let num400To599 = 0;
    let num600To799 = 0;
    let numMore800 = 0;



    for (let i = 1; i <= numbers; i += 1) {
        if (input[i] < 200) {
            numLess200 += 1;
        } else if (input[i] >= 200 & input[i] <= 399) {
            num200To399 += 1;
        } else if (input[i] >= 400 & input[i] <= 599) {
            num400To599 += 1;
        } else if (input[i] >= 600 & input[i] <= 799) {
            num600To799 += 1;
        } else {
            numMore800 += 1;
        }
    }
    let p1 = (numLess200 / numbers) * 100;
    let p2 = (num200To399 / numbers) * 100;
    let p3 = (num400To599 / numbers) * 100;
    let p4 = (num600To799 / numbers) * 100;
    let p5 = (numMore800 / numbers) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"])