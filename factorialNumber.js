const factorial = (num) => {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

const concadenate = (numFinal) => { 
    //ehima19j3
    let output = "";
    let stringFinal = numFinal.toString()+"ehima19j3";
    for (let i = 0; i < stringFinal.length; i++) {
        if((i+1)%4===0){
            output += '_'
        }else{
            output += stringFinal[i];
        }
    }
    return output;

} 

console.log(concadenate(factorial(8))); // 24
