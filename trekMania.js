function trekMania(input) {

    let groupsNum = Number(input[0]);
   

    let musalaGroup = 0;
    let monblanGroup = 0;
    let kilimandgaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;
    let pplTot = 0;

    for (let i = 1; i <= groupsNum; i++) {
        let ppl = Number(input[i]);
        pplTot += ppl;
        if (ppl <= 5) {
            musalaGroup += ppl
        } else if (ppl >= 6 & ppl <= 12) {
            monblanGroup += ppl;
        } else if (ppl >= 13 & ppl <= 25) {
            kilimandgaroGroup += ppl;
        } else if (ppl >= 26 & ppl <= 40) {
            k2Group += ppl;
        } else {
            everestGroup += ppl;
        }

    }
    let pplMusala = musalaGroup / pplTot * 100;
    let pplMonbran = monblanGroup / pplTot * 100;
    let pplKilimangjaro = kilimandgaroGroup / pplTot * 100;
    let pplK2 = k2Group / pplTot * 100;
    let pplEverest = everestGroup / pplTot * 100;

    console.log(`${pplMusala.toFixed(2)}%`);
    console.log(`${pplMonbran.toFixed(2)}%`);
    console.log(`${pplKilimangjaro.toFixed(2)}%`);
    console.log(`${pplK2.toFixed(2)}%`);
    console.log(`${pplEverest.toFixed(2)}%`);

}

trekMania(["5",

    "25",

    "41",

    "31",

    "250",

    "6"])