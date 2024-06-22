function plusMinus(arr) {
    let posCount = 0;
    let negCount = 0;
    let zeroCount = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            posCount++;
        } else if (arr[i] < 0) {
            negCount++;
        } else {
            zeroCount++;
        }
    }

    console.log((posCount / n).toFixed(6));
    console.log((negCount / n).toFixed(6));
    console.log((zeroCount / n).toFixed(6));

}

plusMinus([-4,3,-9,0,4,1])