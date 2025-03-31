function godzillaVsKong(budget,numWorker,priceForClothing) {

    let decor = budget * 0.10;
    let discountClothing = 0;
    let total = 0;
    let moneyLeft =0;

    if (numWorker > 150) {
        discountClothing = priceForClothing - (priceForClothing * 0.10);
        total = (numWorker * discountClothing) + decor;
    } else {
        total = (numWorker * priceForClothing) + decor;
    }

    if (total > budget) {
        moneyLeft = total - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyLeft.toFixed(2)} leva more.`);
    } else {
        moneyLeft = budget - total;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}

godzillaVsKong(15437.62,

    186,
    
    57.99);