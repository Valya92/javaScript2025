function yardGreening(squareMeters){

    let priceBeforeDiscount = squareMeters * 7.61;
    let discount = priceBeforeDiscount * 0.18;
    let finalPrice = priceBeforeDiscount - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(550);