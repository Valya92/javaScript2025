function journey(budget, season) {

    let destination = "";
    let moneySpent = 0;
    let typeAccomodation = "";

    if (budget <= 100) {
        destination = "Bulgaria"
        if (season === "summer") {
            typeAccomodation = "Camp"
            moneySpent += budget * 0.3;
        } else {
            typeAccomodation = "Hotel"
            moneySpent += budget * 0.7;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans"
        if (season === "summer") {
            typeAccomodation = "Camp"
            moneySpent += budget * 0.4;
        } else {
            typeAccomodation = "Hotel"
            moneySpent += budget * 0.8;
            
        }
    } else {
        destination = "Europe"
            typeAccomodation = "Hotel"
            moneySpent += budget * 0.9;

    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeAccomodation} - ${moneySpent.toFixed(2)}`);

}

journey(1500,

    "summer");