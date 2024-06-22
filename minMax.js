function miniMaxSum(arr) {
    arr.sort()
    let minimo = 0
    let maximo = 0
    let count = 0
    
    for(let i = 0; i < 4; i++){
        minimo = minimo + arr[i]
    }
    
    for(let i = arr.length-1; i >= 0; i--){
        if(count < 4){
            maximo = maximo + arr[i]
            count++
        } 
    }
    
    console.log(`${minimo} ${maximo}`)

}

miniMaxSum([1,2,3,4,5])