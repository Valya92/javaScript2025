function skiTrip(daysStay, typeOfAccomodation, grade){

    let priceForOne = (daysStay-1)*18;
    let priceForApartment = (daysStay-1)*25;
    let priceForPresidentApartment = (daysStay-1)*35
    let price = 0;

    if(daysStay<10){
        if(typeOfAccomodation === "room for one person"){
            price = (daysStay-1)*18;
        }else if(typeOfAccomodation==="apartment"){
            price = priceForApartment - (priceForApartment*0.3)
        }else if(typeOfAccomodation ==="president apartment"){
            price = priceForPresidentApartment-(priceForPresidentApartment*0.1)
        }

    }else if(daysStay>=10 && daysStay <=15){
        if(typeOfAccomodation === "room for one person"){
            price = (daysStay-1)*18;
        }else if(typeOfAccomodation==="apartment"){
            price = priceForApartment - (priceForApartment*0.35)
        }else if(typeOfAccomodation ==="president apartment"){
            price = priceForPresidentApartment-(priceForPresidentApartment*0.15)
        }

    }else{
        if(typeOfAccomodation === "room for one person"){
            price = (daysStay-1)*18;
        }else if(typeOfAccomodation==="apartment"){
            price = priceForApartment - (priceForApartment*0.50)
        }else if(typeOfAccomodation ==="president apartment"){
            price = priceForPresidentApartment-(priceForPresidentApartment*0.20)
        }

    }
    if(grade === "positive"){
        price += price*0.25;
    }else{
        price-=price*0.1

    }
    console.log(price.toFixed(2));
    
}

skiTrip(12,

    "room for one person",
    
    "positive");