function building(floorNum, roomNum) {


    for (let i = floorNum; i >= 1; i--) {
        let curFloorRooms = '';

        for (let j = 0; j < roomNum; j++) {

            if (i === floorNum) {
                curFloorRooms += `L${i}${j} `;
            } else if (i % 2 === 0) {
                curFloorRooms += `O${i}${j} `;
            } else {
                curFloorRooms += `A${i}${j} `;
            }

        }
        console.log(`${curFloorRooms}`);
    }

}

building(6, 4);