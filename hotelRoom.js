function hotel(month, numOfNights) {

    let totpriceStudio = 0;
    let totpriceApart = 0;

    if (month === "May" || month === "October") {
        totpriceStudio += numOfNights * 50;
        totpriceApart += numOfNights * 65;
        if (numOfNights > 7 && numOfNights <= 14) {
            totpriceStudio -= (totpriceStudio * 0.05);
            totpriceApart = totpriceApart;
        } else if (numOfNights > 14) {
            totpriceStudio -= (totpriceStudio * 0.3)
            totpriceApart -= totpriceApart * 0.1;
        }
    } else if (month === "June" || month === "September") {
        totpriceStudio += numOfNights * 75.20;
        totpriceApart += numOfNights * 68.70;
        if (numOfNights > 14) {
            totpriceStudio -= (totpriceStudio * 0.2)
            totpriceApart -= totpriceApart * 0.1;
        }
    } else if (month === "July" || month === "August") {
        totpriceStudio += numOfNights * 76;
        totpriceApart += numOfNights * 77;
        if (numOfNights > 14) {
            totpriceApart -= totpriceApart * 0.1
        }
    }
    console.log(`Apartment: ${totpriceApart.toFixed(2)} lv.`);
    console.log(`Studio: ${totpriceStudio.toFixed(2)} lv.`);
}

hotel("August", 20);