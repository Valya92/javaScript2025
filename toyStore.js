function toyStore(holidayPrice, numPuzzles, numDolls, numTeddyBears, numMinions,numTrucks) {


    let totToyCount = numPuzzles + numDolls + numTeddyBears + numMinions + numTrucks;
    let puzzlePrice = numPuzzles * 2.60;
    let dollsPrice = numDolls * 3;
    let teddyBearPrice = numTeddyBears * 4.10;
    let minionPrice = numMinions * 8.20;
    let truckPrice = numTrucks * 2;
    let price = 0;
    let discount = 0;
    let rent = 0;


    let totToyPrice = puzzlePrice + dollsPrice + teddyBearPrice + minionPrice + truckPrice;
    if (totToyCount >= 50) {
        discount += totToyPrice * 0.25;
        rent += (totToyPrice -discount)* 0.10;
        price += totToyPrice - discount - rent;
    } else {
        rent += (totToyPrice -discount)* 0.10;
        price += totToyPrice - rent;
    }
    if (price >= holidayPrice) {
        console.log(`Yes! ${(price-holidayPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(holidayPrice-price).toFixed(2)} lv needed.`);;
    }


}

toyStore(40.8,

    20,
    
    25,
    
    30,
    
    50,
    
    10)