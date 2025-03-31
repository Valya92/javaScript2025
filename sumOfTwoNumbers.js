function sumOfTwoNum(startNum, endNum, magicNum) {

    let combinations = 0;
    let isMagicPairFound = false;
    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            combinations++;
            if (i + j === magicNum) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNum})`);
                isMagicPairFound = true;
                break;
            }
        }
        if (isMagicPairFound) {
            break;
        }
    }
    if (!isMagicPairFound) {
        console.log(`${combinations} combinations - neither equals ${magicNum}`);
    }

}

sumOfTwoNum(1,

    10,
    
    5);