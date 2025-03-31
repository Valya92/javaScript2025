function commission(cityName,salesNumber) {

    if(cityName!="Sofia" && cityName!="Plovdiv" && cityName!="Varna"){
        console.log("error");
    }
    switch (cityName) {
        case "Sofia":
            if (salesNumber >= 0 && salesNumber <= 500) {
                let sale = (salesNumber * 0.05).toFixed(2);
                console.log(sale);
            } else if (salesNumber > 500 && salesNumber <= 1000) {
                let sale = (salesNumber * 0.07).toFixed(2);
                console.log(sale);
            } else if (salesNumber > 1000 && salesNumber <= 10000) {
                let sale = (salesNumber * 0.08).toFixed(2);
                console.log(sale);
            } else if (salesNumber > 10000) {
                let sale = (salesNumber * 0.12).toFixed(2);
                console.log(sale);
            }else{
                console.log("error");
            }
            break;
        case "Varna":
            if (salesNumber >= 0 && salesNumber <= 500) {
                let sale = (salesNumber * 0.045).toFixed(2);
                console.log(sale);
            } else if (salesNumber > 500 && salesNumber <= 1000) {
                let sale = (salesNumber * 0.075).toFixed(2);
                console.log(sale);
            } else if (salesNumber > 1000 && salesNumber <= 10000) {
                let sale = (salesNumber * 0.10).toFixed(2);
                console.log(sale);
            } else if (salesNumber > 10000) {
                let sale = (salesNumber * 0.130).toFixed(2);
                console.log(sale);
            }else{
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (salesNumber >= 0 && salesNumber <= 500) {
                let sale = (salesNumber * 0.055).toFixed(2);
                console.log(sale);
            } else if (salesNumber > 500 && salesNumber <= 1000) {
                let sale = (salesNumber * 0.08).toFixed(2);
                console.log(sale);
            } else if (salesNumber > 1000 && salesNumber <= 10000) {
                let sale = (salesNumber * 0.12).toFixed(2);
                console.log(sale);
            } else if (salesNumber > 10000) {
                let sale = (salesNumber * 0.145).toFixed(2);
                console.log(sale);
            }else{
                console.log("error");
            }
            break;

        
    }

}

commission("Plovdiv", -20);