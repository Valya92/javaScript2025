function cinema(typeOfProjection, rowNumbers, columnNumbers) {

    let totalSeats = rowNumbers*columnNumbers;

    switch (typeOfProjection) {
        case "Premiere":
            price = totalSeats*12;
            console.log(price.toFixed(2));
            break;
        case "Normal":
            price = totalSeats*7.50;
            console.log(price.toFixed(2));
            break;
        case "Discount":
            price = totalSeats*5.00;
            console.log(price.toFixed(2));
            break;
    }
}

cinema("Premiere",

10,

12);