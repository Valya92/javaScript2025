function schoolMaterials(pensNum, markerNum, cleaningLiqiud, discountPercent){
    
    let sum = (pensNum*5.80) + (markerNum *7.20) + (cleaningLiqiud *1.20);
    let discount =sum*(discountPercent/100);
    let finalPrice = sum - discount;

    console.log(finalPrice);

}

schoolMaterials(2,3,4,25);