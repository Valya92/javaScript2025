function depositCalc(depositAmount, depositLength, interest) {

    let gainedInterest = (depositAmount * (interest/100))/12;


    let sum = depositAmount + depositLength * gainedInterest;

    console.log(sum);

}

depositCalc(200,

    3,

    5.7);