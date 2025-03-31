function cleverLili(liliAge, machinePrice, pricePerToy) {

    let money = 0;
    let count = 0;
    let toyCount = 0;
    let add = 0;

    for (let i = 1; i <= liliAge; i++) {
        if (i % 2 == 0) {
            add += 10;
            money += add;
            count += 1;
        } else {
            toyCount += 1;
        }
    }
    let moneyFromToys = pricePerToy*toyCount;
    let finalMoney = (money - count) + moneyFromToys;
    if(finalMoney >= machinePrice){
        console.log(`Yes! ${(finalMoney - machinePrice).toFixed(2)}`);
    }else{
        console.log(`No! ${(machinePrice - finalMoney).toFixed(2)}`);
    }
}

cleverLili (10,

170.00,

6);