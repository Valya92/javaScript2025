function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numOfFisherman = Number(input[2])
    let sum = 0;
    let price = 0;

    switch (season) {

        case "Spring":
            //3000
            if (numOfFisherman <= 6) {
                if (numOfFisherman % 2 == 0) {
                    price += 3000 - (3000 * 0.15);
                    sum += price;
                } else {
                    price += 3000 - (3000 * 0.10);
                    sum += price;
                }
            } else if (numOfFisherman >= 7 && numOfFisherman <= 11) {
                if (numOfFisherman % 2 == 0) {
                    price += 3000 - (3000 * 0.20);
                    sum += price;
                } else {
                    price += 3000 - (3000 * 0.15);
                    sum += price;
                }
            } else if (numOfFisherman >= 12 && numOfFisherman <= 18) {
                if (numOfFisherman % 2 == 0) {
                    price += 3000 - (3000 * 0.30);
                    sum += price;
                } else {
                    price += 3000 - (3000 * 0.25);
                    sum += price;
                }
            }
            break;

        case "Summer":
            //4200
            if (numOfFisherman <= 6) {
                if (numOfFisherman % 2 == 0) {
                    price = 4200 - (4200 * 0.15);
                    sum += price;
                } else {
                    price += 4200 - (4200 * 0.10);
                    sum += price;
                }
            } else if (numOfFisherman >= 7 && numOfFisherman <= 11) {
                if (numOfFisherman % 2 == 0) {
                    price += 4200 - (4200 * 0.20);
                    sum += price;
                } else {
                    price += 4200 - (4200 * 0.15);
                    sum += price;
                }
            } else if (numOfFisherman >= 12 && numOfFisherman <= 18) {
                if (numOfFisherman % 2 == 0) {
                    price += 4200 - (4200 * 0.30);
                    sum += price;
                } else {
                    price += 4200 - (4200 * 0.25);
                    sum += price;
                }
            }
            break;

        case "Autumn":
            //4200
            if (numOfFisherman <= 6) {
                price = 4200 - (4200 * 0.10);
                sum += price;
            } else if (numOfFisherman >= 7 && numOfFisherman <= 11) {
                price += 4200 - (4200 * 0.15);
                sum += price;
            } else if(numOfFisherman >= 12 && numOfFisherman <= 18) {
                price += 4200 - (4200 * 0.25);
                sum += price;
            }

            break;

        case "Winter":
            //2600
            if (numOfFisherman <= 6) {
                if (numOfFisherman % 2 == 0) {
                    price += 2600 - (2600 * 0.15);
                    sum += price;
                } else {
                    price += 2600 - (2600 * 0.10);
                    sum += price;
                }
            } else if (numOfFisherman >= 7 && numOfFisherman <= 11) {
                if (numOfFisherman % 2 == 0) {
                    price += 2600 - (2600 * 0.20);
                    sum += price;
                } else {
                    price = 2600 - (2600 * 0.15);
                    sum += price;
                }
            } else if (numOfFisherman >= 12 && numOfFisherman <= 18) {
                if (numOfFisherman % 2 == 0) {
                    price += 2600 - (2600 * 0.30);
                    sum += price;
                } else {
                    price += 2600 - (2600 * 0.25);
                    sum += price;
                }
            }
            break;

    }

    if (budget >= sum) {
        console.log(`Yes! You have ${(budget - sum).toFixed(2)} leva left.`);
    } else if (budget < sum) {
        console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva.`);
    }

}

fishingBoat(["3600",

    "Autumn",

    "7"]);