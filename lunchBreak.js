function lunchBreak(movieName,episodeLength,breakLength){

    let lunchTime= breakLength*0.125;
    let restTime = breakLength*0.25;
    let timeLeft = breakLength-(lunchTime+restTime);

    if(timeLeft>=episodeLength){
        let left = Math.ceil(timeLeft-episodeLength);
        console.log(`You have enough time to watch ${movieName} and left with ${left} minutes free time.`);
    }else{
        let timeNeeded = Math.ceil(episodeLength-timeLeft);
        console.log(`You don't have enough time to watch ${movieName}, you need ${timeNeeded} more minutes.`);
    }
    
}

lunchBreak("Game of Thrones",

60,

96);