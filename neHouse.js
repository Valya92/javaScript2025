function newHouse(flowerType, numberOfFlowers, budget) {

    let price = 0;

    switch (flowerType) {
        case "Roses":
            let priceForRoses = numberOfFlowers * 5
            if (numberOfFlowers > 80) {
                priceForRoses = priceForRoses - (priceForRoses * 0.10);
            }
            price += priceForRoses;
            break;
        case "Dahlias":
            let priceForDahlias = numberOfFlowers * 3.80;
            if (numberOfFlowers > 90) {
                priceForDahlias = priceForDahlias - (priceForDahlias * 0.15);
            }
            price += priceForDahlias;
            break;
        case "Tulips":
            let priceForTulips = numberOfFlowers * 2.80;
            if (numberOfFlowers > 80) {
                priceForTulips = priceForTulips - (priceForTulips * 0.15);
            }
            price += priceForTulips;
            break;
        case "Narcissus":
            let priceForNarcissus = numberOfFlowers * 3;
            if (numberOfFlowers < 120) {
                priceForNarcissus = priceForNarcissus + (priceForNarcissus * 0.15);

            }
            price += priceForNarcissus
            break;
        case "Gladiolus":
            let priceForGladiolus = numberOfFlowers * 2.50;
            if (numberOfFlowers < 80) {
                priceForGladiolus = priceForGladiolus + (priceForGladiolus * 0.20);

            }
            price += priceForGladiolus
            break;
    }


    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`);
    } else if (budget < price) {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }

}

newHouse("Narcissus", 119, 360);