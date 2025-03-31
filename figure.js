function faceOfFigure(type,side,side2){

    if(type == "square"){
        let sideLength = side;
        let result =(sideLength*sideLength).toFixed(3)
         console.log(result);
    }else if(type == "rectangle"){
        let oneSide = side
        let secondSide = side2
        let result = (oneSide*secondSide).toFixed(3);
        console.log(result);
    }else if(type == "circle"){
        let radius = side;
        let result = ((radius*radius)*Math.PI).toFixed(3)
        console.log(result);
    }else if(type == "triangle"){
        let length = side
        let hight = side2
        let result = ((length*hight)/2).toFixed(3);
        console.log(result);

    }
    
}

faceOfFigure("rectangle", 7, 2.5)