function shop(product, city, quantity) {

    let price = 0;

    switch (product) {
        case "coffee":
            if (city == "Sofia") {
                price = quantity * 0.50;
            } else if (city == "Plovdiv") {
                price = quantity * 0.40;
            } else if (city == "Varna") {
                price = quantity * 0.45;
            }
            break;
        case "water":
            if (city == "Sofia") {
                price = quantity * 0.80;
            } else if (city == "Plovdiv") {
                price = quantity * 0.70;
            } else if (city == "Varna") {
                price = quantity * 0.70;
            }
            break;
        case "beer":
            if (city == "Sofia") {
                price = quantity * 1.20;
            } else if (city == "Plovdiv") {
                price = quantity * 1.15;
            } else if (city == "Varna") {
                price = quantity * 1.10;
            }
            break;
        case "sweets":
            if (city == "Sofia") {
                price = quantity * 1.45;
            } else if (city == "Plovdiv") {
                price = quantity * 1.30;
            } else if (city == "Varna") {
                price = quantity * 1.35;
            }
            break;
        case "peanuts":
            if (city == "Sofia") {
                price = quantity * 1.60;
            } else if (city == "Plovdiv") {
                price = quantity * 1.50;
            } else if (city == "Varna") {
                price = quantity * 1.55;
            }
            break;

    }
console.log(price);
}

shop("coffee",

"Varna",

2);