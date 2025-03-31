function someOfSec(fFinish,sFinish,tFinish){


    let sumOfSeconds = fFinish+sFinish+tFinish;
    let totTime = sumOfSeconds/60;
    let minutes = Math.floor(totTime);
    let seconds = sumOfSeconds%60;

    if(seconds<10){
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);
    }
    
}

someOfSec(35,45,44)