function fish(budget,season,numOfFisherman) {

    let shipRentPrice = 0;

    if (season === "Spring") {
        shipRentPrice = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        shipRentPrice = 4200;
    } else {
        shipRentPrice = 2600;
    }

    if (numOfFisherman <= 6) {
        shipRentPrice -= shipRentPrice * 0.1;
    } else if (numOfFisherman >= 7 && numOfFisherman <= 11) {
        shipRentPrice -= shipRentPrice * 0.15;
    } else {
        shipRentPrice -= shipRentPrice * 0.25;
    }

    let areFishermanEvenNum = numOfFisherman % 2 === 0;
    let noAutumn = season !== "Autumn";

    if (areFishermanEvenNum && noAutumn) {
        shipRentPrice -= shipRentPrice * 0.05;
    }

    if (shipRentPrice <= budget) {
        console.log(`Yes! You have ${(budget - shipRentPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(shipRentPrice - budget).toFixed(2)} leva.`);
    }
}

fish(2000,

    "Winter",

    13);