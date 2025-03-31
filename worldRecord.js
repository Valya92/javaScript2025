function worldRecord(recordInSec,distance,timePerMeter) {

    let ivanTime = distance * timePerMeter;
    let slowDown = (Math.floor((distance / 15)) * 12.5);
    let ivanTotTime = ivanTime + slowDown;
    let difference = 0;

    if (ivanTotTime < recordInSec) {

        console.log(`Yes, he succeeded! The new world record is ${ivanTotTime.toFixed(2)} seconds.`);
    } else {
        difference = ivanTotTime - recordInSec;
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }


}

worldRecord(10464,

    1500,
    
    20)