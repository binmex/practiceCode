function minimumBribes(q) {
    //[ 2, 1, 5, 3, 4 ]
    let bribes = 0;
    
    for(let i = q.length-1;i >= 0; i-- ){
        //i = 4
        //4-5 = -1
        if(q[i] - (i+1) > 2){ //se ha movido mas de 2 posiciones hacia adelante?
            console.log("Too chaotic")
            return
        }
        for(let j = Math.max(0,q[i]-2) ; j<i ; j++){
            if(q[j] > q[i]){
                bribes++;
            }
        }
    }
    console.log(bribes)
}

minimumBribes([ 2, 1, 5, 3, 4 ])