function distanceFromHqInBlocks(n){
    if (n >=42){
        return n - 42;
    }
    else {
        return 42 - n
    }
}

function distanceFromHqInFeet(m){
    const num = distanceFromHqInBlocks(m);
    const blockLength = 264;
    return num * blockLength;
}

function distanceTravelledInFeet(s,d){
    const distance = Math.abs(s - d) * 264;
    return distance;
}

function calculateFarePrice(s,d){
    const distance = distanceTravelledInFeet(s,d);
    if (distance <= 400){
        return 0;
    }
    else if(distance >400 && distance <=2000){
        let fee = (distance - 400) * 0.02;
        return fee;
    }
    else if(distance > 2000 && distance <=2500){
        return 25;
    }
    else if(distance >2500){
        return "cannot travel that far";
    }
}

