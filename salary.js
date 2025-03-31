function salary(input) {

    let browserWindows = Number(input[0]);
    let salary = Number(input[1]);
    let tab = input[2];

    let facebookFine = 150;
    let instagramFine = 100;
    let redditFine = 50;

    for (let i = 2; i <= input.length; i++) {
        if (input[i] == "Facebook") {
            salary -= 150;
        } else if (input[i] == "Instagram") {
            salary -= 100;
        } else if (input[i] == "Reddit") {
            salary -= 50;
        }
    }
    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(`${salary}`);
    }
}

salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);