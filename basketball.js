function basketballEquipment(taxForYear){

    let shoes = taxForYear - (taxForYear*0.4);
    let trackSuit = shoes - (shoes*0.2);
    let ball = trackSuit*0.25;
    let accessories = ball*0.20;

    let total = taxForYear+shoes+trackSuit+ball+accessories;

    console.log(total);
    
}

basketballEquipment(365);