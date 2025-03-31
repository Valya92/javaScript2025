function repainting(plasticNeeded, paintNeeded, paintDisolver, timeToDoTheJob) {

    let priceForPlastic = (plasticNeeded + 2) * 1.50;
    let bag = 0.40;
    let totPaint = (paintNeeded * 0.10) + paintNeeded;
    let priceForPaint = totPaint * 14.5;
    let priceForDisolver = paintDisolver * 5;
    let priceForMaterilas = priceForPlastic + priceForDisolver + priceForPaint + bag;
    let priceForWorkersForHour = priceForMaterilas * 0.3;
    let workersPay = priceForWorkersForHour * timeToDoTheJob;

    let finalPrice = workersPay + priceForMaterilas;

    console.log(finalPrice);

}

repainting(10, 11, 4, 8);