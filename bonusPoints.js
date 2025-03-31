function bonusPoints(points) {
    
    let bonusPoints = 0;

    if (points % 2 == 0) {
        bonusPoints += 1
    } else if(points % 10 == 5) {
        bonusPoints += 2
    }
    if (points <= 100) {
        bonusPoints += 5;
        finalPoints = bonusPoints + points
    } else if (points > 100 & points <= 1000) {
        bonusPoints += points * 0.2;
        finalPoints = bonusPoints + points;
    } else {
        bonusPoints += points * 0.1
        finalPoints = bonusPoints + points;
       
    }
    bonusPoints = bonusPoints.toFixed(1);
    finalPoints = finalPoints.toFixed(1)
    console.log(bonusPoints);
    console.log(finalPoints);
}

bonusPoints(15875);