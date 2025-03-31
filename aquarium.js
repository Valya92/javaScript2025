function aquarium(length, width, hight, percentage){

    let spaceInDecimetres = length*width*hight;
    let spaceInLitres = spaceInDecimetres/1000;
    let minusSpace = spaceInLitres*(percentage/100);

    let spaceWithoutInserts = spaceInLitres-minusSpace

    console.log(spaceWithoutInserts);
 
}

aquarium(85,

    75,
    
    47,
    
    17);