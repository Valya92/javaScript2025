function onTime(timeOfExam, minuteOfExam, timeOfArrival, arrivalMinute) {

    let hourInMinutesExam = timeOfExam * 60;
    let totMinutesTimeOfExam = hourInMinutesExam + minuteOfExam;
    let hourInMinutesArrival = timeOfArrival * 60;
    let totMinutesTimeOfArrival = hourInMinutesArrival + arrivalMinute;


    if (totMinutesTimeOfArrival === totMinutesTimeOfExam) {
        console.log(`On time`);
    } else if (totMinutesTimeOfExam < totMinutesTimeOfArrival) {
        console.log(`Late`);
        let difference = totMinutesTimeOfArrival - totMinutesTimeOfExam;
        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        } else {
            let hour = Math.floor(difference / 60);
            let minutes = Math.floor(difference % 60);
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            console.log(`${hour}:${minutes} hours after the start`);
        }
    } else if ((totMinutesTimeOfArrival + 30) < totMinutesTimeOfExam) {
        console.log(`Early`);
        let difference = totMinutesTimeOfExam - totMinutesTimeOfArrival;
        if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else {
            let hour = Math.floor(difference / 60);
            let minutes = Math.floor(difference % 60);
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            console.log(`${hour}:${minutes} hours before the start`);
        }

    } else {
        console.log(`On time`);
        let difference = totMinutesTimeOfExam - totMinutesTimeOfArrival;
        if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else {
            let hour = Math.floor(difference / 60);
            let minutes = Math.floor(difference % 60);
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            console.log(`${hour}:${minutes} hours before the start`);
        }

    }
}

onTime(11,

    30,

    8,

    12);