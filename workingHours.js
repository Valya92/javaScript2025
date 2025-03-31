function workingHours(hour,dayOfTheWeek){

    if(dayOfTheWeek === "Sunday"){
        console.log("closed");
    }

    switch (dayOfTheWeek) {
        case "Monday":
            if(hour>=10 && hour<=18){
                console.log("open");
            }else{
                console.log("closed");
            }
            break;
            case "Tuesday":
                if(hour>=10 && hour<=18){
                    console.log("open");
                }else{
                    console.log("closed");
                }
            break;
            case "Wednesday":
                if(hour>=10 && hour<=18){
                    console.log("open");
                }else{
                    console.log("closed");
                }
            break;
            case "Thursday":
                if(hour>=10 && hour<=18){
                    console.log("open");
                }else{
                    console.log("closed");
                }
            break;
            case "Friday":
                if(hour>=10 && hour<=18){
                    console.log("open");
                }else{
                    console.log("closed");
                }
            break;
            case "Saturday":
                if(hour>=10 && hour<=18){
                    console.log("open");
                }else{
                    console.log("closed");
                }
    
        default:
            break;
    }
    
}

workingHours(11,

    "Monday");