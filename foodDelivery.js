function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegiMenu = Number(input[2]);
    let delivery = 2.50;

    let chickenMenuPrice = chickenMenu*10.35;
    let fishMenuPrice = fishMenu*12.40;
    let vegiMenuPrice = vegiMenu*8.15;

    let dessertPrice = (chickenMenuPrice+fishMenuPrice+vegiMenuPrice)*0.2;
    let totalPrice = chickenMenuPrice+fishMenuPrice+vegiMenuPrice+delivery+dessertPrice

console.log(totalPrice);

}

foodDelivery(["2 ",

"4 ",

"3 "]);