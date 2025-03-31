function ageSex(age,sex){


    if(sex === "m" & age<16){
        console.log("Master");
    }else if(sex === "m" & age >= 16){
        console.log("Mr.");
    }else if(sex === "f" & age>= 16){
        console.log("Ms.");
    }else{
        console.log("Miss");
    }


    
}

ageSex (["13.5", "m"]);