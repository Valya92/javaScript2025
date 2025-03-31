function petShop(dogFoodNum, catFoodNum){
    
    let priceForDogs = dogFoodNum * 2.50;
    let priceForCats = catFoodNum * 4;
    let result = priceForCats + priceForDogs;

    console.log(`${result} lv.`);
}

petShop(5,4);