function vacationBookList(pagesNum, pagesPerHour, daysDeadline){

    let totTime = pagesNum/pagesPerHour;
    let hoursPerDay = totTime/daysDeadline;
    console.log(hoursPerDay);

}

vacationBookList(212,20,2);