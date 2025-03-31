function shopping(budget,videoCardNum,processorNum,ramMemory){

    let totVideoPrice = videoCardNum*250;
    let processorNumPrice = totVideoPrice*0.35;
    let totProcessorPrice = processorNumPrice*processorNum;
    let ramMemoryPrice = totVideoPrice*0.10;
    let totMemoryPrice = ramMemoryPrice*ramMemory;

    let total = totMemoryPrice+totProcessorPrice+totVideoPrice;
    let finalTotal = 0;
    if(videoCardNum>processorNum){
        finalTotal= total-(total*0.15);
    }else{
        finalTotal = total
    }
    if(finalTotal>budget){
        let difference = (finalTotal-budget).toFixed(2);
        console.log(`Not enough money! You need ${difference} leva more!`);
    }else{
        let left = (budget-finalTotal).toFixed(2);
        console.log(`You have ${left} leva left!`);
    }
}

shopping(900,

    2,
    
    1,
    
    3);