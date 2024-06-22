/**reverse word**/

function FirstReverse(str) { 

    let vectorWords = str.split('')
    let word_reverse = []
  
    for(let i = vectorWords.length-1; i >= 0; i--){
      word_reverse.push(vectorWords[i])
    }
    // code goes here  
    return word_reverse.join(''); 
  }
     
  // keep this function call here 
  console.log(FirstReverse("Hola Perro"));