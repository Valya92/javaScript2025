function oscars(input) {

    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let judgesNum = Number(input[2]);
    let judgeLength = 0;
    let allPoints = academyPoints;



    for (let i = 1; i < judgesNum * 2; i += 2) {
        let judgeName = input[i + 2];
        let points = Number(input[i + 3]);
        for (let j = 0; j <= judgeName.length - 1; j++) {
            judgeLength += 1;
        }
        allPoints += ((judgeLength * points) / 2);
        judgeLength = 0;
        if (allPoints > 1250.5) {
            break;
        }

    }
    if (allPoints > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(allPoints.toFixed(1))}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - allPoints).toFixed(1)} more!`);
    }

}



oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);