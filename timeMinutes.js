function timeMinutes(hour, minutes){

    let totMinutes = (hour*60)+minutes;
    let timeInMinutes = totMinutes+15;
    let endHour = Math.floor(timeInMinutes/60);
    let endMinute = timeInMinutes%60;

    if(endHour===24){
        endHour = 0;
    }
 
    if(endMinute<10){
        console.log(`${endHour}:0${endMinute}`);
    }else{
        console.log(`${endHour}:${endMinute}`);
    }

}

timeMinutes(12,49);