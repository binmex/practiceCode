function truckTour(petrolpumps) {
    //1 km por litro gasolina
    //[ [ 1, 5 ], [ 10, 3 ], [ 3, 4 ] ]
    let numberStation = petrolpumps.length
    let totalGas = 0
    let totalDistance = 0
    let startIndex = 0
    let current_gas = 0
    
    for (let i = 0; i<numberStation; i++){
        const[gas,distance] = petrolpumps[i]
        totalGas += gas
        totalDistance += distance
        current_gas += gas-distance
        
        if(current_gas < 0){
            startIndex = i+1;
            current_gas = 0
        }
    }
    
    if(totalGas >= totalDistance){
        return startIndex
    }else{
        return -1
    }
}

console.log(truckTour([ [ 1, 5 ],[ 3, 4 ],[ 10, 3 ] ])) //2