function tennisRankList(input) {

    let tournamentNum = Number(input[0]);
    let startPoints = Number(input[1]);
    let totPoints = startPoints;
    let tournWon = 0;
    for (let i = 2; i <= input.length; i++) {
        let score = input[i];

        if (score === "W") {
            totPoints += 2000;
            tournWon += 1
        } else if (score === "F") {
            totPoints += 1200;
        } else if (score === "SF") {
            totPoints += 720;
        }
    }
    let percent = tournWon / tournamentNum * 100;
    let averageP = Math.floor((totPoints - startPoints) / tournamentNum)
    console.log(`Final points: ${totPoints}`);
    console.log(`Average points: ${averageP}`);
    console.log(`${percent.toFixed(2)}%`);
}

tennisRankList(["5",

    "1400",

    "F",

    "SF",

    "W",

    "W",

    "SF"]);